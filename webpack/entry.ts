import config from '../config';

export default [
  'core-js/actual',
  'regenerator-runtime/runtime',
  `./${config.dir.paths.srcJS}/index.ts`,
  `./${config.dir.paths.srcStyles}/styles.scss`
];
