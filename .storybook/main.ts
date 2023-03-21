import path from 'path';
import type { StorybookConfig } from '@storybook/html-vite';
import config from '../config';

const storybookConfig: StorybookConfig = {
  docs: {
    autodocs: 'tag'
  },
  stories: [
    path.resolve(config.dir.paths.srcStories, './**/*.mdx').replace(/\\/g, '/'),
    path
      .resolve(config.dir.paths.srcStories, './**/*.stories.@(ts|mdx)')
      .replace(/\\/g, '/')
  ],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false
      }
    },
    '@storybook/addon-a11y',
    'storybook-addon-mock'
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {}
  },
  staticDirs: [path.resolve(config.dir.paths.srcStatic).replace(/\\/g, '/')],
  refs: {
    actions: { disable: true }
  }
};
export default storybookConfig;
