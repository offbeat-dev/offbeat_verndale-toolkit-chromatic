import type { StorybookConfig } from '@storybook/html-vite';
import { mergeConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import { rollupPluginHandlebars } from './lib/rollup-plugin-handlebars';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/html-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      plugins: [
        eslint(),
        rollupPluginHandlebars({
          helpersDirs: '/handlebars',
          partialsDirs: [
            '/src/html/components',
            '/src/html/modules',
            '/src/html/modules/global'
          ]
        })
      ]
    });
  }
};

export default config;
