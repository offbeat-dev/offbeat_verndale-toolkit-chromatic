import createPage from './generators/page';
import createModule from './generators/module';
import createComponent from './generators/component';

switch (process.argv[2]) {
  case 'page':
    createPage();
    break;

  case 'module':
    createModule();
    break;

  case 'component':
    createComponent();
    break;

  default:
    break;
}
