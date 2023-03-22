import type { Organism } from '@verndale/core';
import globModules from './glob-modules';
import React from 'react';
import { createRoot } from 'react-dom/client';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reactModule = (Component: any, nodeList: NodeListOf<HTMLElement>) => {
  return nodeList.forEach(node =>
    createRoot(node).render(<Component {...node.dataset} />)
  );
};

const modules: Organism[] = [
  {
    name: 'accordion',
    loader: () => import('./modules/accordion')
  },
  {
    name: 'mockApi',
    styles: () => import('../scss/modules/mock-api.scss'),
    loader: () => import('./modules/mockApi'),
    render: reactModule
  }
];

export default [...globModules, ...modules];
