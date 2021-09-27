import { Routes } from '@angular/router';
import { AdminDashboardComponent } from 'src/app/admin/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('src/app/admin/admin.module').then(m => m.AdminModule)
  }
];