import chalk from 'chalk';
import { execSync } from 'child_process';
import {
  copyFile,
  requestFileName,
  fileNameToTitleCase,
  fileNamtToPasCalCase,
  replaceStrings
} from '../utils';
import { SOURCE_PATHS, COMPONENTS_DIR } from '../../config';

const createComponent = (name: string) => {
  const destHtml = `./${SOURCE_PATHS.MARKUP}/${COMPONENTS_DIR}/${name}.hbs`;
  const destScss = `./${SOURCE_PATHS.STYLES}/${COMPONENTS_DIR}/_${name}.scss`;
  const destStory = `./${SOURCE_PATHS.STORIES}/${COMPONENTS_DIR}/${name}.stories.ts`;

  copyFile('./.toolkit/scaffold/templates/component.hbs', destHtml);
  copyFile('./.toolkit/scaffold/templates/module.scss', destScss);
  copyFile('./.toolkit/scaffold/templates/component.stories.ts', destStory);

  replaceStrings({
    files: [destHtml, destScss, destStory],
    from: [/{{name}}/g, /{{NameTitleCase}}/g, /{{NameTitleCasePascalCase}}/g],
    to: [name, fileNameToTitleCase(name), fileNamtToPasCalCase(name)],
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
  requestFileName('component', createComponent);
};
