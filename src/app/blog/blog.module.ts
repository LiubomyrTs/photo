import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogGridComponent } from 'src/app/blog/blog-grid/blog-grid.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogViewComponent } from './blog-view/blog-view.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    BlogGridComponent,
    BlogViewComponent,
  ],
  entryComponents: [
  ],
  exports: [
    BlogGridComponent
  ],
  providers: [
  ]
})
export class BlogModule {}
