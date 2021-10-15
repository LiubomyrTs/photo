import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routes as mainRoutes } from './main/routes';
import { routes as adminRoutes } from './admin/routes';
import { routes as blogRoutes } from './blog/routes';

const routes: Routes = [
  ...adminRoutes,
  ...mainRoutes,
  ...blogRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
