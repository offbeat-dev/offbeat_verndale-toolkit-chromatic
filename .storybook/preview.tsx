import * as React from 'react';
import svgxhr from '../src/scripts/helpers/svgxhr';
import type { Preview } from '@storybook/html';
import { Title, Subtitle, Description, Stories } from '@storybook/blocks';
import '../src/scripts';
import '../src/scss/styles.scss';
import { PUBLIC_PATH } from '../config';
import { initialize, mswLoader } from 'storybook-msw-addon';

initialize({ onUnhandledRequest: 'bypass' });

svgxhr({
  filename: `dist/${PUBLIC_PATH}images/svgsheet.svg`
});

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
    },
    backgrounds: {
      grid: {
        disable: true
      }
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Colors',
          'Typography',
          'Grid',
          'Components',
          'Modules',
          'Templates'
        ]
      }
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Stories />
        </>
      )
    },
    gridOverlay: {
      columns: 12,
      gap: 'var(--gutter-width)',
      gutter: 'var(--container-padding)',
      maxWidth: 'var(--container-max-width)'
    }
  }
};

export const loaders = [mswLoader];

export default preview;
