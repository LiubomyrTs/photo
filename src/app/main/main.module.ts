import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainGridComponent } from 'src/app/main/main-grid/main-grid.component';
import { BlogModule } from 'src/app/blog/blog.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainInfoCardComponent } from './main-info-card/main-info-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegistrationComponent } from 'src/app/registration/registration.component';

@NgModule({
  imports: [
    CommonModule,
    BlogModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
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
