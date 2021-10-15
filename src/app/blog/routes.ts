import { Routes } from '@angular/router';

import { LAYOUT } from 'src/app/core/enums/layout.enum';
import { BlogGridComponent } from 'src/app/blog/blog-grid/blog-grid.component';
import { BlogViewComponent } from 'src/app/blog/blog-view/blog-view.component';

export const routes: Routes = [
  {
    path: 'blog',
    component: BlogGridComponent,
    data: {
      layout: LAYOUT.MAIN
    }
  },
  {
    path: 'blog/:id',
    component: BlogViewComponent,
    data: {
      layout: LAYOUT.MAIN
    }
  }
];