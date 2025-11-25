import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'utl',
    loadChildren: () =>
      import('./utl/utl.routes').then(m => m.UtlRoutes)
  },
  {
    path: '',
    redirectTo: 'utl/listaalumnos',
    pathMatch: 'full'
  }
];
