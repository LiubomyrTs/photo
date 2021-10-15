import { Routes } from '@angular/router';
import { MainGridComponent } from 'src/app/main/main-grid/main-grid.component';
import { RegistrationComponent } from 'src/app/main/registration/registration.component';
import { LoginComponent } from 'src/app/main/login/login.component';
import { DashboardComponent } from 'src/app/main/dashboard/dashboard.component';
import { LAYOUT } from 'src/app/core/enums/layout.enum';
import { BlogGridComponent } from 'src/app/blog/blog-grid/blog-grid.component';

export const routes: Routes = [
  {
    path: '',
    component: MainGridComponent,
    data: {
      layout: LAYOUT.MAIN
    }
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    data: {
      layout: LAYOUT.MAIN
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      layout: LAYOUT.MAIN
    }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      layout: LAYOUT.MAIN
    }
  },
];
