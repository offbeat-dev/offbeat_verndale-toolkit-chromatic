import 'focus-visible';
import svgxhr from 'webpack-svgstore/dist/helpers/svgxhr';
import create from '@verndale/core';
import modules from './modules';

svgxhr('/images/svgsheet.svg');

const body = document.querySelector('body') as HTMLBodyElement;

document.addEventListener('DOMContentLoaded', async () => {
  if (!body.dataset.modulesLoaded) {
    create(modules).then(() => {
      body.dataset.modulesLoaded = 'true';
    });
  }
});
