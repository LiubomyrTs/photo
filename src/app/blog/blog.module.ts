import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogGridComponent } from 'src/app/blog/blog-grid/blog-grid.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BlogGridComponent,
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
