import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () =>
      import('./distancia.component').then((c) => c.DistanciaComponent)
  }
] as Routes;
