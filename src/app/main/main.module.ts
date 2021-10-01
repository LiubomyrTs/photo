import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BlogModule } from 'src/app/blog/blog.module';
import { DashboardComponent } from 'src/app/main/dashboard/dashboard.component';
import { LoginComponent } from 'src/app/main/login/login.component';
import { MainGridComponent } from 'src/app/main/main-grid/main-grid.component';
import { MainInfoCardComponent } from './main-info-card/main-info-card.component';
import { RegistrationComponent } from 'src/app/main/registration/registration.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    BlogModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [
    DashboardComponent,
    LoginComponent,
    MainGridComponent,
    MainInfoCardComponent,
    RegistrationComponent,
  ],
  entryComponents: [
  ],
  exports: [
  ],
  providers: [
  ]
})
export class MainModule {}
