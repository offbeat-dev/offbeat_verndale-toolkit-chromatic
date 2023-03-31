import chalk from 'chalk';
import { exec } from 'child_process';
import {
  copyFile,
  requestFileName,
  fileNameToTitleCase,
  fileNamtToPasCalCase,
  replaceStrings
} from '../utils';
import { SOURCE_PATHS, TEMPLATES_DIR } from '../../config';

const createPage = (name: string) => {
  const destHtml = `./${SOURCE_PATHS.MARKUP}/${TEMPLATES_DIR}/${name}.hbs`;
  const destStory = `./${SOURCE_PATHS.STORIES}/${TEMPLATES_DIR}/${name}.stories.ts`;

  copyFile('./.toolkit/scaffold/templates/page.hbs', destHtml);
  copyFile('./.toolkit/scaffold/templates/page.stories.ts', destStory);

  replaceStrings({
    files: [destHtml, destStory],
    from: [/{{name}}/g, /{{NameTitleCase}}/g, /{{NameTitleCasePascalCase}}/g],
    to: [name, fileNameToTitleCase(name), fileNamtToPasCalCase(name)],
    cb: () => {
      console.log(chalk.green(`${name} created successfully!`));
      try {
        exec(`code -g ${destHtml}`);
        exec(`code -g ${destStory}`);
      } catch {}
    }
  });
};

export default () => {
  requestFileName('page', createPage);
};
