import { Routes } from '@angular/router';
import { MainGridComponent } from 'src/app/main/main-grid/main-grid.component';
import { RegistrationComponent } from 'src/app/registration/registration.component';
import { LoginComponent } from 'src/app/login/login.component';

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
  }
];
