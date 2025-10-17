import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () =>
      import('../chino/chino.component').then((c) => c.ChinoComponent)
  }
] as Routes;
