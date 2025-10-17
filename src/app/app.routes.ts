import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'distancia',
    loadChildren: () =>
      import('./formularios/distancia/distancia.routes').then((m) => m.default)
  },
  {
    path: 'chino',
    loadChildren: () =>
      import('./chino/chino.routes').then((m) => m.default)
  },
  {
    path: 'aporb',
    loadChildren: () =>
      import('./aporb/aporb.routes').then((m) => m.default)
  },
  {
    path: 'utl',
    loadChildren: () =>
      import('./utl/utl.routes').then((m) => m.default)
  },
  {
    path: '',
    redirectTo: 'distancia',
    pathMatch: 'full'
  }
];
