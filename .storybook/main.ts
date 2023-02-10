import path from 'path';
import webpack, { Configuration, WebpackPluginInstance } from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import config from '../config';
import rules from '../webpack/rules';
import plugins from '../webpack/plugins';

export default {
  stories: [
    path
      .resolve(config.dir.paths.srcStories, './**/*.stories.@(ts|mdx)')
      .replace(/\\/g, '/')
  ],
  staticDirs: [
    { from: `../${config.dir.paths.srcStatic}`, to: `/${config.publicPath}` }
  ],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  features: {
    storyStoreV7: true
  },
  core: {
    builder: 'webpack5'
  },
  webpackFinal: async (config: Configuration) => {
    const webpackPlugins: WebpackPluginInstance[] = config.plugins || [];
    const webpackRules = config.module?.rules || [];

    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...webpackRules,
          ...rules({ production: config.mode === 'production' })
        ]
      },
      plugins: [
        ...webpackPlugins,
        ...plugins({ production: config.mode === 'production' }),
        new webpack.ProvidePlugin({
          story: 'story'
        })
      ],
      resolve: {
        plugins: [
          new TsconfigPathsPlugin({
            extensions: config?.resolve?.extensions,
            baseUrl: path.resolve(__dirname, '../')
          })
        ],
        alias: {
          story: path.resolve(__dirname, './utils/story.ts')
        },
        extensions: ['.ts', '.tsx', '.js', '.json']
      }
    };
  }
};
