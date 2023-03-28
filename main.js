import 'vite/modulepreload-polyfill';
import './src/scripts/index';
import svgxhr from './src/scripts/helpers/svgxhr';
import.meta.glob('./src/static/images/**/*');

svgxhr({ filename: '/images/svgsheet.svg' });
