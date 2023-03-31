import path from 'path';
import type { StorybookConfig } from '@storybook/html-vite';
import { SOURCE_PATHS } from '../.toolkit/config';

const storybookConfig: StorybookConfig = {
  docs: {
    autodocs: 'tag'
  },
  stories: [
    path.resolve(SOURCE_PATHS.STORIES, './**/*.mdx').replace(/\\/g, '/'),
    path
      .resolve(SOURCE_PATHS.STORIES, './**/*.stories.@(ts|mdx)')
      .replace(/\\/g, '/')
  ],
  addons: [
    'storybook-addon-grid-overlay',
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
  staticDirs: [path.resolve(SOURCE_PATHS.STATIC).replace(/\\/g, '/')],
  refs: {
    actions: { disable: true }
  }
};
export default storybookConfig;
