import { Routes } from '@angular/router';

export const UtlRoutes: Routes = [
  {
    path: 'listaalumnos',

    loadComponent: () =>
      import('./alumnos/alumnos.component').then(c => c.AlumnosComponent)
  },
  {
    path: 'agregar',
    loadComponent: () =>
      import('./agregar/agregar.component').then(c => c.default)
  },
  {
    path: 'editar/:id',
    loadComponent: () =>
      import('./editar/editar.component').then(c => c.default)
  },
  {
    path: 'eliminar/:id',
    loadComponent: () =>
      import('./eliminar/eliminar.component').then(c => c.default)
  }
];
