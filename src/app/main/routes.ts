import { Routes } from '@angular/router';

import { LAYOUT } from 'src/app/core/enums/layout.enum';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
import { RegistrationComponent } from 'src/app/auth/components/registration/registration.component';
import { DashboardComponent } from 'src/app/main/components/dashboard/dashboard.component';
import { MainGridComponent } from 'src/app/main/components/main-grid/main-grid.component';
import { PortfolioGridComponent } from 'src/app/portfolio/components/portfolio-grid/portfolio-grid.component';
import { ContactsComponent } from 'src/app/main/components/contacts/contacts.component';
import { PhotosessionViewComponent } from 'src/app/photosession/components/photosession-view/photosession-view.component';

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
  {
    path: 'portfolio',
    component: PortfolioGridComponent,
    data: {
      layout: LAYOUT.MAIN
    }
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    data: {
      layout: LAYOUT.MAIN
    }
  },
  {
    path: 'photosession/:id',
    component: PhotosessionViewComponent,
    data: {
      layout: LAYOUT.MAIN
    }
  }
];
