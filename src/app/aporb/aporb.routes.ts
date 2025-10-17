import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () =>
      import('../aporb/aporb.component').then((c) => c.AporbComponent)
  }
] as Routes;
