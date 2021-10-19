import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BlogModule } from 'src/app/blog/blog.module';
import { RegistrationComponent } from 'src/app/auth/components/registration/registration.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from 'src/app/main/components/dashboard/dashboard.component';
import { HeaderComponent } from 'src/app/main/components/header/header.component';
import { FooterComponent } from 'src/app/main/components/footer/footer.component';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
import { MainGridComponent } from 'src/app/main/components/main-grid/main-grid.component';
import { MainInfoCardComponent } from 'src/app/main/components/main-info-card/main-info-card.component';
import { ContactsComponent } from 'src/app/main/components/contacts/contacts.component';


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
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MainGridComponent,
    MainInfoCardComponent,
    RegistrationComponent,
    ContactsComponent,
  ],
  entryComponents: [
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  providers: [
  ]
})
export class MainModule {}
