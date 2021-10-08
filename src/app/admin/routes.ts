import { Routes } from '@angular/router';
import { AdminGuard } from 'src/app/auth/auth.guard';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('src/app/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AdminGuard]
  }
];