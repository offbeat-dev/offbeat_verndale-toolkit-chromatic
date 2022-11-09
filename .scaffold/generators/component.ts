import chalk from 'chalk';
import { execSync } from 'child_process';
import {
  copyFile,
  requestFileName,
  fileNameToTitleCase,
  fileNamtToPasCalCase,
  replaceStrings
} from '../utils';
import config from '../../config';

const createComponent = (name: string) => {
  const destHtml = `./${config.dir.paths.srcComponents}/${name}.hbs`;
  const destScss = `./${config.dir.paths.srcStyles}/components/_${name}.scss`;
  const destStory = `./${config.dir.paths.storyComponents}/${name}.stories.ts`;

  copyFile('./.scaffold/templates/component.hbs', destHtml);
  copyFile('./.scaffold/templates/module.scss', destScss);
  copyFile('./.scaffold/templates/component.stories.ts', destStory);

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
