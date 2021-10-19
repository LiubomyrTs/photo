import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from 'src/app/auth/components/login/login.component';
import { RegistrationComponent } from 'src/app/auth/components/registration/registration.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
