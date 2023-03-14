import * as React from 'react';
import svgxhr from './helpers/svgxhr';
import create from '@verndale/core';
import type { Preview } from '@storybook/html';
import { Title, Subtitle, Description, Stories } from '@storybook/blocks';
import modules from '../src/scripts/modules';
import '../src/scss/styles.scss';

svgxhr({ filename: 'dist/images/svgsheet.svg' });

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
    options: {
      storySort: {
        order: [
          'Introduction',
          'Colors',
          'Typography',
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
    }
  }
};

export const decorators = [
  storyFn => {
    setTimeout(() => create(modules));
    return storyFn();
  }
];

export default preview;
