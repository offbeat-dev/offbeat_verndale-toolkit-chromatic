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
import { SOURCE_PATHS, MODULES_DIR } from '../../config';
import createScript from './script';
import createReactScript from './react';

const prompt = promptSync({ sigint: true });

const createModule = (name: string) => {
  const hasJs = (prompt('Is this a JS module (Y/n)?: ') || 'y').toLowerCase() === 'y';
  let isReact = false;

  if (hasJs) {
    isReact = (prompt('Is this a React module (y/N)?: ') || 'n').toLowerCase() === 'y';

    if (isReact) {
      createReactScript(name);
    } else {
      createScript(name);
    }
  }

  const srctHtml = isReact
    ? './.toolkit/scaffold/templates/react-module.hbs'
    : './.toolkit/scaffold/templates/module.hbs';

  const destHtml = `./${SOURCE_PATHS.MARKUP}/${MODULES_DIR}/${name}.hbs`;
  const destScss = `./${SOURCE_PATHS.STYLES}/${MODULES_DIR}/${name}.scss`;
  const destStory = `./${SOURCE_PATHS.STORIES}/${MODULES_DIR}/${name}.stories.ts`;

  copyFile(srctHtml, destHtml);
  copyFile('./.toolkit/scaffold/templates/module.scss', destScss);
  copyFile('./.toolkit/scaffold/templates/module.stories.ts', destStory);

  const dataJs = hasJs ? ` data-module="${name}"` : '';

  replaceStrings({
    files: [destHtml, destScss, destStory],
    from: [/{{name}}/g, /{{NameTitleCase}}/g, /{{NameTitleCasePascalCase}}/g, '{{jsplaceholder}}'],
    to: [name, fileNameToTitleCase(name), fileNamtToPasCalCase(name), dataJs],
    cb: () => {
      console.log(chalk.green(`${name} created successfully!`));

      try {
        execSync(`code -g ${destScss}`);
        execSync(`code -g ${destHtml}`);
        execSync(`code -g ${destStory}`);
      } catch {}
    }
  });
};

export default () => {
  requestFileName('module', createModule);
};
