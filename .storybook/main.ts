import path from 'path';
import type { StorybookConfig } from '@storybook/html-vite';
import config from '../config';

const storybookConfig: StorybookConfig = {
  // docs: {
  //   autodocs: 'tag'
  // },
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
  staticDirs: ['../src/static']
};
export default storybookConfig;
