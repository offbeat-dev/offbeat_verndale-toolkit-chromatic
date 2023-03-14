import 'focus-visible';
import create from '@verndale/core';
import modules from './modules';

const isStorybook = !!document.getElementById('storybook-root');
const body = document.querySelector('body') as HTMLBodyElement;

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
