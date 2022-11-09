import * as fs from 'fs';
import chalk from 'chalk';
import { execSync } from 'child_process';
import {
  copyFile,
  fileNameToTitleCase,
  fileNamtToPasCalCase,
  replaceStrings,
  updateModules
} from '../utils';
import config from '../../config';
import packageJson from '../../package.json';

const createReactScript = (name: string) => {
  const destFolder = `./${config.dir.paths.srcJS}/modules/${name}`;
  const destJs = `${destFolder}/index.tsx`;

  fs.mkdirSync(destFolder);
  copyFile('./.scaffold/templates/react-module.tsx', destJs);

  replaceStrings({
    files: [destJs],
    from: [/{{NameTitleCase}}/g, /{{namePascalCase}}/g],
    to: [fileNameToTitleCase(name), fileNamtToPasCalCase(name)],
    cb: () => {}
  });

  if (!('react' in packageJson.dependencies)) {
    console.log(chalk.yellow('Installing react dependencies...'));

    try {
      execSync('yarn add react react-dom', { stdio: 'pipe' });
      execSync('yarn add -D @types/react', { stdio: 'pipe' });
      console.log(
        chalk.green('react and react-dom packages were successfully installed.')
      );
    } catch (e) {
      console.log(
        chalk.red(`
        ERROR: ${e}
        Dependencies were not properly installed. Try installing them manually.
      `)
      );
    }
  }

  updateModules({
    name,
    url: `./modules/${name}`,
    styles: `../${config.dir.assets.scss}/modules/${name}.scss`,
    isReact: true
  });

  try {
    execSync(`code -g ${destJs}`);
  } catch {}
};

export default createReactScript;
