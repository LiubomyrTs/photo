import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainGridComponent } from 'src/app/main/main-grid/main-grid.component';
import { BlogModule } from 'src/app/blog/blog.module';
import { FormsModule } from '@angular/forms';
import { MainInfoCardComponent } from './main-info-card/main-info-card.component';

@NgModule({
  imports: [
    CommonModule,
    BlogModule,
    FormsModule
  ],
  declarations: [
    MainGridComponent,
    MainInfoCardComponent,
  ],
  entryComponents: [
  ],
  exports: [
  ],
  providers: [
  ]
})
export class MainModule {}
