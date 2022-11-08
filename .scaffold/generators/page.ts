import chalk from 'chalk';
import { exec } from 'child_process';
import {
  copyFile,
  requestFileName,
  fileNameToTitleCase,
  fileNamtToPasCalCase,
  replaceStrings
} from '../utils';
import config from '../../config';

const createPage = (name: string) => {
  const destHtml = `./${config.dir.paths.srcTemplates}/${name}.hbs`;
  const destStory = `./${config.dir.paths.storyTemplates}/${name}.stories.ts`;

  copyFile('./.scaffold/templates/page.hbs', destHtml);
  copyFile('./.scaffold/templates/page.stories.ts', destStory);

  replaceStrings({
    files: [destHtml, destStory],
    from: [/{{name}}/g, /{{NameTitleCase}}/g, /{{NameTitleCasePascalCase}}/g],
    to: [name, fileNameToTitleCase(name), fileNamtToPasCalCase(name)],
    cb: () => {
      console.log(chalk.green(`${name} created successfully!`));
      try {
        exec(`code -g ${destHtml}:10:5`);
      } catch {}
    }
  });
};

export default () => {
  requestFileName('page', createPage);
};
