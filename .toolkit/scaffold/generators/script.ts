import { exec } from 'child_process';
import {
  copyFile,
  fileNameToTitleCase,
  fileNamtToPasCalCase,
  replaceStrings,
  updateModules
} from '../utils';
import { SOURCE_PATHS, MODULES_DIR } from '../../config';

const createScript = (name: string) => {
  const destJs = `./${SOURCE_PATHS.SCRIPTS}/${MODULES_DIR}/${name}.ts`;

  copyFile('./.toolkit/scaffold/templates/module.ts', destJs);

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
    styles: `../${SOURCE_PATHS.STYLES}/${MODULES_DIR}/${name}.scss`
  });
};

export default createScript;
