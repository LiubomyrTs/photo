import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('src/app/admin/admin.module').then(m => m.AdminModule)
  }
];