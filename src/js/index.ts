import 'focus-visible';
import svgxhr from 'webpack-svgstore/dist/helpers/svgxhr';
import create from '@verndale/core';
import modules from './modules';

svgxhr('/images/svgsheet.svg');

let modulesCreated = false;

document.addEventListener('DOMContentLoaded', () => {
  if (modulesCreated) return;
  modulesCreated = true;

  create(modules);
});
