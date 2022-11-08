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
  const destJs = `./${config.dir.paths.srcJS}/modules/${name}.ts`;

  copyFile('./.scaffold/templates/module.ts', destJs);

  replaceStrings({
    files: [destJs],
    from: ['{{name}}', /{{NameTitleCase}}/g, /{{NameTitleCasePascalCase}}/g],
    to: [name, fileNameToTitleCase(name), fileNamtToPasCalCase(name)],
    cb: () => {
      try {
        exec(`code -g ${destJs}:6:5`);
      } catch {}
    }
  });

  updateModules({
    name,
    url: `./modules/${name}`
  });
};

export default createScript;
