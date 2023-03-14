// YourTheme.js

import { create } from '@storybook/theming/create';
import verndaleLogo from './logo.svg';

export default create({
  base: 'light',

  colorPrimary: '#6A2FF3',
  colorSecondary: '#FFB800',

  // UI
  appBg: '#F4F4F4',
  appContentBg: '#FFFFFF',
  appBorderColor: '#E2EBEA',
  appBorderRadius: 0,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#1C1C1C',
  textInverseColor: '#FFFFFF',

  // Toolbar default and active colors
  barTextColor: '#1C1C1C',
  barSelectedColor: '#6A2FF3',
  barBg: '#F4F4F4',

  brandTitle: 'Verndale Digital Styling',
  brandUrl: 'https://www.verndale.com/',
  brandImage: verndaleLogo
});
