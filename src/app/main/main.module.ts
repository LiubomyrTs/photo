import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainGridComponent } from 'src/app/main/main-grid/main-grid.component';
import { BlogModule } from 'src/app/blog/blog.module';

@NgModule({
  imports: [
    CommonModule,
    BlogModule,
  ],
  declarations: [
    MainGridComponent,
  ],
  entryComponents: [
  ],
  exports: [
  ],
  providers: [
  ]
})
export class MainModule {}
