import 'vite/modulepreload-polyfill';
import './src/scripts/index';
import { PUBLIC_PATH } from './config';
import svgxhr from './src/scripts/helpers/svgxhr';
import.meta.glob('./src/static/images/**/*');

svgxhr({ filename: `/${PUBLIC_PATH}images/svgsheet.svg` });
