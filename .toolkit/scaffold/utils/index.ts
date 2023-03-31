import fs from 'fs';
import path from 'path';
import promptSync from 'prompt-sync';
import validFileName from 'valid-filename';
import chalk from 'chalk';
import { replaceInFile } from 'replace-in-file';
import {
  SOURCE_PATHS,
  TEMPLATES_DIR,
  MODULES_DIR,
  COMPONENTS_DIR
} from '../../config';

const prompt = promptSync({ sigint: true });

export const requestFileName = (type: string, cb: (name: string) => void) => {
  let validName = false;

  while (!validName) {
    let name = prompt(`File Name?: `);
    let filePath = '';

    const isValid =
      name && !name.includes('.') && !name.includes(' ') && validFileName(name);

    switch (type) {
      case 'page':
        filePath = `${SOURCE_PATHS.MARKUP}/${TEMPLATES_DIR}/${name}.hbs`;
        break;

      case 'module':
        filePath = `${SOURCE_PATHS.MARKUP}/${MODULES_DIR}/${name}.hbs`;
        break;

      case 'component':
        filePath = `${SOURCE_PATHS.MARKUP}/${COMPONENTS_DIR}/${name}.hbs`;
        break;

      default:
        break;
    }

    const fileExists = fs.existsSync(filePath);

    if (!isValid) {
      console.log(
        chalk.red(
          `Enter a ${chalk.bold('valid')} file name ${chalk.bold(
            'without'
          )} extension`
        )
      );
    } else if (fileExists) {
      console.log(chalk.red('This already exists, try again'));
    } else {
      if (cb) cb(`${name}`);
      validName = true;
    }
  }
};

export const copyFile = (src: string, dest: string) => {
  fs.copyFileSync(src, dest, fs.constants.COPYFILE_EXCL);
};

type ReplaceStringArgs = {
  files: string[];
  from: (string | RegExp)[];
  to: string[];
  cb: () => void;
};

export const replaceStrings = async (config: ReplaceStringArgs) => {
  try {
    const resultsWithReplacedNames = await replaceInFile(config);
    if (resultsWithReplacedNames) config.cb();
  } catch (err) {
    throw new Error(`${err}`);
  }
};

export const fileNameToTitleCase = (str: string) => {
  let output = str.split('-');

  for (var i = 0; i < output.length; i++) {
    output[i] = output[i][0].toUpperCase() + output[i].slice(1);
  }

  return output.join(' ');
};

export const fileNamtToPasCalCase = (str: string) => {
  return fileNameToTitleCase(str).split(' ').join('');
};

type UpdateModulesArgs = {
  name: string;
  url: string;
  styles: string;
  isReact?: boolean;
};

export const updateModules = (obj: UpdateModulesArgs) => {
  const modulesFile = path.resolve(__dirname, `../scaffolded-modules.json`);
  const globsFile = `./${SOURCE_PATHS.SCRIPTS}/glob-modules.ts`;
  let modules: UpdateModulesArgs[] = [];

  fs.readFile(modulesFile, 'utf8', function (err, data) {
    if (err) throw err;
    modules = JSON.parse(data);
    modules.push(obj);

    const stream = fs.createWriteStream(modulesFile);

    stream.once('open', function () {
      stream.write(JSON.stringify(modules, null, 2));
      stream.end();
    });
  });

  fs.readFile(globsFile, 'utf8', function (err) {
    if (err) throw err;

    const stream = fs.createWriteStream(globsFile);

    const data = `
import type { Organism } from '@verndale/core';

const globModules: Organism[] = [
  ${modules
    .map(
      j => `{
    name: '${j.name}',
    loader: () => import('${j.url}'),
    styles: () => import('${j.styles}'),
    ${
      j.isReact
        ? `render: (Component, nodeList) => {
      const React = require('react');
      const { render } = require('react-dom');
      nodeList.forEach(node => render(React.createElement(Component, node.dataset), node));
    }`
        : ''
    }
  }`
    )
    .join(',\n')}
];

export default globModules;
`;

    stream.once('open', function () {
      stream.write(data);
      stream.end();
    });
  });
};
