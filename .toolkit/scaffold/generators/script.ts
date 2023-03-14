import { exec } from 'child_process';
import {
  copyFile,
  fileNameToTitleCase,
  fileNamtToPasCalCase,
  replaceStrings,
  updateModules
} from '../utils';
import config from '../../config';

const createScript = (name: string) => {
  const destJs = `./${config.dir.paths.srcScripts}/modules/${name}.ts`;

  copyFile('./.scaffold/templates/module.ts', destJs);

  replaceStrings({
    files: [destJs],
    from: ['{{name}}', /{{NameTitleCase}}/g, /{{NameTitleCasePascalCase}}/g],
    to: [name, fileNameToTitleCase(name), fileNamtToPasCalCase(name)],
    cb: () => {
      try {
        exec(`code -g ${destJs}`);
      } catch {}
    }
  });

  updateModules({
    name,
    url: `./modules/${name}`,
    styles: `../${config.dir.assets.scss}/modules/${name}.scss`
  });
};

export default createScript;
