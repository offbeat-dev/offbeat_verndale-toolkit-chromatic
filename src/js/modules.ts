import type { Organism } from '@verndale/core';
import globModules from './glob-modules';

const modules: Organism[] = [
  {
    name: 'accordion',
    loader: () => import('./modules/accordion'),
    styles: () => import('../scss/modules/accordion.scss')
  }
];

export default [...globModules, ...modules];
