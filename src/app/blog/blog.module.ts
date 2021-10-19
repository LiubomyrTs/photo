import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { BlogViewComponent } from 'src/app/blog/components/blog-view/blog-view.component';
import { BlogGridComponent } from 'src/app/blog/components/blog-grid/blog-grid.component';

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
