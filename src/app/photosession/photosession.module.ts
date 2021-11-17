import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PhotosessionGridComponent } from 'src/app/photosession/components/photosession-grid/photosession-grid.component';
import { PhotosessionViewComponent } from 'src/app/photosession/components/photosession-view/photosession-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PhotosessionGalleryModalComponent } from 'src/app/photosession/components/photosession-gallery-modal/photosession-gallery-modal.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    PhotosessionGridComponent,
    PhotosessionViewComponent,
    PhotosessionGalleryModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    SwiperModule
  ],
  exports: [
    PhotosessionGridComponent,
    PhotosessionViewComponent,
    PhotosessionGalleryModalComponent,
  ]
})
export class PhotosessionModule { }
