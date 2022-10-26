const modules = [
  {
    name: 'accordion',
    loader: () => import('./modules/accordion'),
    styles: () => import('../scss/modules/accordion.scss')
  }
];

export default [...modules];
