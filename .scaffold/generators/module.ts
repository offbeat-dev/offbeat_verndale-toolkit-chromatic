import chalk from 'chalk';
import { execSync } from 'child_process';
import promptSync from 'prompt-sync';
import {
  copyFile,
  requestFileName,
  fileNameToTitleCase,
  fileNamtToPasCalCase,
  replaceStrings
} from '../utils';
import config from '../../config';
import createScript from './script';
import createReactScript from './react';

const prompt = promptSync({ sigint: true });

const createModule = (name: string) => {
  const hasJs = (prompt('JS (Y/n)?: ') || 'y').toLowerCase() === 'y';
  let isReact = false;

  if (hasJs) {
    isReact = (prompt('React (y/N) ?: ') || 'n').toLowerCase() === 'y';

    if (isReact) {
      createReactScript(name);
    } else {
      createScript(name);
    }
  }

  const srctHtml = isReact
    ? './.scaffold/templates/react-module.hbs'
    : './.scaffold/templates/module.hbs';

  const destHtml = `./${config.dir.paths.srcModules}/${name}.hbs`;
  const destScss = `./${config.dir.paths.srcStyles}/modules/${name}.scss`;
  const destStory = `./${config.dir.paths.storyModules}/${name}.stories.ts`;

  copyFile(srctHtml, destHtml);
  copyFile('./.scaffold/templates/module.scss', destScss);
  copyFile('./.scaffold/templates/module.stories.ts', destStory);

  const dataJs = hasJs ? ` data-module="${name}"` : '';

  replaceStrings({
    files: [destHtml, destScss, destStory],
    from: [
      /{{name}}/g,
      /{{NameTitleCase}}/g,
      /{{NameTitleCasePascalCase}}/g,
      '{{jsplaceholder}}'
    ],
    to: [name, fileNameToTitleCase(name), fileNamtToPasCalCase(name), dataJs],
    cb: () => {
      console.log(chalk.green(`${name} created successfully!`));

      try {
        execSync(`code -g ${destScss}:2:3`);
        execSync(`code -g ${destHtml}:2:3`);
      } catch {}
    }
  });
};

export default () => {
  requestFileName('module', createModule);
};
