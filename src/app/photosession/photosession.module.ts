import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PhotosessionGridComponent } from 'src/app/photosession/components/photosession-grid/photosession-grid.component';
import { PhotosessionViewComponent } from 'src/app/photosession/components/photosession-view/photosession-view.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PhotosessionGridComponent,
    PhotosessionViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    PhotosessionGridComponent,
    PhotosessionViewComponent,
  ]
})
export class PhotosessionModule { }
