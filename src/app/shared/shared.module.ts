import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafeHtmlPipe } from 'src/app/shared/pipes/safe-html/safe-html.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AlertsListComponent } from 'src/app/shared/components/alerts-list/alerts-list.component';
import { FormControlErrorsComponent } from 'src/app/shared/components/form-control-errors/form-control-errors.component';
import { GeneratedContentComponent } from 'src/app/shared/components/generated-content/generated-content.component';
import { FileUploadComponent } from 'src/app/shared/components/file-upload/file-upload.component';
import { ServerSrcDirective } from 'src/app/shared/directives/server-src.directive';


@NgModule({
  declarations: [
    AlertsListComponent,
    FormControlErrorsComponent,
    GeneratedContentComponent,
    SafeHtmlPipe,
    FileUploadComponent,
    ServerSrcDirective
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
    ServerSrcDirective
  ],
  providers: [
  ]
})
export class SharedModule {}
