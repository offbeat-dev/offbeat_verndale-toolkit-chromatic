import 'focus-visible';
import create from '@verndale/core';
import modules from './modules';
import svgxhr from './helpers/svgxhr';

const isStorybook = !!document.getElementById('storybook-root');
const body = document.querySelector('body') as HTMLBodyElement;

if (!isStorybook) svgxhr({ filename: '/images/svgsheet.svg' });

document.addEventListener(
  'DOMContentLoaded',
  async () => {
    if (!body.dataset.modulesLoaded || isStorybook) {
      create(modules).then(() => {
        body.dataset.modulesLoaded = 'true';
      });
    }
  },
  false
);
