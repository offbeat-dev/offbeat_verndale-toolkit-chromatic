import 'focus-visible';
import { DecoratorFunction } from '@storybook/addons';
import create from '@verndale/core';
import svgxhr from 'webpack-svgstore/dist/helpers/svgxhr';
import modules from '../src/js/modules';
import '../src/scss/styles.scss';

svgxhr('/images/svgsheet.svg');

const viewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '375px',
      height: '812px'
    }
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px'
    }
  }
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: { viewports }
};

const CreateModulesDecorator: DecoratorFunction = storyFn => {
  const body = document.querySelector('body') as HTMLBodyElement;

  setTimeout(() => {
    create(modules).then(() => {
      body.dataset.modulesLoaded = 'true';
    });
  });
  return storyFn();
};

export const decorators = [CreateModulesDecorator];
