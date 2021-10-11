import { Routes } from '@angular/router';
import { AdminGuard } from 'src/app/auth/admin.guard';
import { LAYOUT } from 'src/app/core/enums/layout.enum';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('src/app/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AdminGuard],
    data: {
      layout: LAYOUT.ADMIM
    }
  }
];