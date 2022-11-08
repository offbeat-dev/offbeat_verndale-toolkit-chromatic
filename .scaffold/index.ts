import createPage from './generators/page';
import createModule from './generators/module';

switch (process.argv[2]) {
  case 'page':
    createPage();
    break;

  case 'module':
    createModule();
    break;

  default:
    break;
}
