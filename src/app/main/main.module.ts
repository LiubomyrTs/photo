import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BlogModule } from 'src/app/blog/blog.module';
import { LoginComponent } from 'src/app/login/login.component';
import { MainGridComponent } from 'src/app/main/main-grid/main-grid.component';
import { MainInfoCardComponent } from './main-info-card/main-info-card.component';
import { RegistrationComponent } from 'src/app/registration/registration.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

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
