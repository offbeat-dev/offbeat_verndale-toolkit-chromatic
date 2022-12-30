import { Configuration } from 'webpack';
import entry from './webpack/entry';
import output from './webpack/output';
import rules from './webpack/rules';
import plugins from './webpack/plugins';
import optimization from './webpack/optimization';

export type WebpackArgs = {
  WEBPACK_BUNDLE?: boolean;
  WEBPACK_BUILD?: boolean;
  production?: boolean;
};

export default (env: WebpackArgs): Configuration => ({
  devtool: 'source-map',
  entry,
  output,
  optimization,
  module: {
    rules: rules(env)
  },
  plugins: plugins(env),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  mode: 'production',
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
});
