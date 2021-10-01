import { Routes } from '@angular/router';
import { MainGridComponent } from 'src/app/main/main-grid/main-grid.component';
import { RegistrationComponent } from 'src/app/main/registration/registration.component';
import { LoginComponent } from 'src/app/main/login/login.component';
import { DashboardComponent } from 'src/app/main/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: MainGridComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard/:id',
    component: DashboardComponent
  }
];
