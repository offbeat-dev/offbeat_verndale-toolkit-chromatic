import 'focus-visible';
import create from '@verndale/core';
import modules from './modules';
import '../scss/styles.scss';
import.meta.glob('../static/images/**/*');

const body = document.querySelector('body') as HTMLBodyElement;

document.addEventListener('DOMContentLoaded', async () => {
  if (!body.dataset.modulesLoaded) {
    create(modules).then(() => {
      body.dataset.modulesLoaded = 'true';
    });
  }
});
