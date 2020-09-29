import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routes as mainRoutes } from './main/routes';

const routes: Routes = [
  ...mainRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
