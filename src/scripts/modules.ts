import type { Organism } from '@verndale/core';
import globModules from './glob-modules';

const modules: Organism[] = [
  {
    name: 'accordion',
    loader: () => import('./modules/accordion')
  }
];

export default [...globModules, ...modules];
