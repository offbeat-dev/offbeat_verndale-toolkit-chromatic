import { ESBuildMinifyPlugin } from 'esbuild-loader';

export default {
  minimizer: [
    new ESBuildMinifyPlugin({
      target: 'es2020',
      css: true
    })
  ]
};
