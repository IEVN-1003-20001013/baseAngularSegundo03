import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'aporb',
    loadChildren: () =>
      import('./aporb/aporb.routes').then((m) => m.default)
  },
  {
    path: 'chino',
    loadChildren: () =>
      import('./chino/chino.routes').then((m) => m.default)
  },
  {
    path: 'distancia',
    loadChildren: () =>
      import('./formularios/distancia/distancia.routes').then((m) => m.default)
  },
  {
    path: '',
    redirectTo: 'distancia',  // carga "distancia" por defecto
    pathMatch: 'full'
  }
];
