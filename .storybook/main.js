const path = require('path');
const webpack = require('webpack');
const { publicPath, dir } = require('../config.js');
const { rules, plugins } = require('../webpack');

module.exports = {
  stories: [path.resolve(dir.paths.srcStories, './**/*.stories.@(js|mdx)')],
  staticDirs: [{ from: `../${dir.paths.srcStatic}`, to: `/${publicPath}` }],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y'
  ],
  core: {
    builder: 'webpack5'
  },
  webpackFinal: async config => {
    const webpackConfig = {
      ...config,
      module: {
        ...config.module,
        rules: rules({})
      },
      plugins: [
        ...config.plugins,
        ...plugins({}),
        new webpack.ProvidePlugin({
          story: 'story'
        })
      ]
    };

    // Register Template as a global module
    webpackConfig.resolve.alias.story = path.resolve(
      __dirname,
      './utils/story.js'
    );
    webpackConfig.plugins.push(
      new webpack.ProvidePlugin({
        story: 'story'
      })
    );

    return webpackConfig;
  }
};
