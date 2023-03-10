import type { Preview } from '@storybook/html';
import '../src/scripts/main';

const viewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '360px',
      height: '812px'
    }
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px'
    }
  },
  tabletLandscape: {
    name: 'Tablet Landscape',
    styles: {
      width: '1024px',
      height: '768px'
    }
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1280px',
      height: '840px'
    }
  }
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    viewport: { viewports },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
