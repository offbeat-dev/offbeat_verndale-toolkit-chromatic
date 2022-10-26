import path from 'path';
import config from '../config';

export default {
  path: path.join(__dirname, `../${config.dir.production}`, config.publicPath),
  publicPath: `/${config.publicPath}`,
  filename: 'scripts/[name].bundle.js'
};
