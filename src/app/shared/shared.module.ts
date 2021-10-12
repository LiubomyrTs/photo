import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafeHtmlPipe } from 'src/app/shared/pipes/safe-html/safe-html.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AlertsListComponent } from 'src/app/shared/components/alerts-list/alerts-list.component';
import { FormControlErrorsComponent } from 'src/app/shared/components/form-control-errors/form-control-errors.component';
import { GeneratedContentComponent } from './components/generated-content/generated-content.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

@NgModule({
  declarations: [
    AlertsListComponent,
    FormControlErrorsComponent,
    GeneratedContentComponent,
    SafeHtmlPipe,
    FileUploadComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    AlertsListComponent,
    FormControlErrorsComponent,
    GeneratedContentComponent,
    SafeHtmlPipe,
    FileUploadComponent,
  ],
  providers: [
  ]
})
export class SharedModule {}
