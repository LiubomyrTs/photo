import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routes as mainRoutes } from './main/routes';
import { routes as adminRoutes } from './admin/routes';

const routes: Routes = [
  ...adminRoutes,
  ...mainRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
