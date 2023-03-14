import path from 'path';
import type { StorybookConfig } from '@storybook/html-vite';
import { mergeConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import { rollupPluginHandlebars } from './lib/rollup-plugin-handlebars';
import config from '../config';

const storybookConfig: StorybookConfig = {
  stories: [
    path.resolve(config.dir.paths.srcStories, './**/*.mdx').replace(/\\/g, '/'),
    path
      .resolve(config.dir.paths.srcStories, './**/*.stories.@(ts|mdx)')
      .replace(/\\/g, '/')
  ],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/html-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  async viteFinal(viteConfig) {
    // Merge custom configuration into the default config
    return mergeConfig(viteConfig, {
      plugins: [
        eslint(),
        rollupPluginHandlebars({
          helpersDirs: path.resolve(__dirname, '../handlebars'),
          partialsDirs: [
            path.resolve(config.dir.paths.srcComponents),
            path.resolve(config.dir.paths.srcModules),
            path.resolve(config.dir.paths.srcModules, 'global')
          ]
        })
      ]
    });
  }
};

export default storybookConfig;
