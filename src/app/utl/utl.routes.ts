import { Routes } from '@angular/router';

export default [
  {
    path: 'agregar',
    loadComponent: () =>
      import('../utl/agregar/agregar.component').then((c) => c.AgregarComponent)
  },
  {
    path: 'editar',
    loadComponent: () =>
      import('../utl/editar/editar.component').then((c) => c.EditarComponent)
  },
  {
    path: 'eliminar',
    loadComponent: () =>
      import('../utl/eliminar/eliminar.component').then((c) => c.EliminarComponent)
  },
  {
    path: 'alumnos',
    loadComponent: () =>
      import('../utl/alumnos/alumnos.component').then((c) => c.AlumnosComponent)
  }
] as Routes;
