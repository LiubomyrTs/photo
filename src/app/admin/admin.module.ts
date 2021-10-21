import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserTableComponent } from 'src/app/admin/user/user-table/user-table.component';

import { AdminDashboardComponent } from 'src/app/admin/components/admin-dashboard/admin-dashboard.component';
import { EditorComponent } from 'src/app/admin/components/editor/editor.component';
import { BlogTableComponent } from 'src/app/blog/components/blog-table/blog-table.component';
import { BlogFormComponent } from 'src/app/blog/components/blog-form/blog-form.component';
import { HomeInfoFormComponent } from 'src/app/admin/components/home-info-form/home-info-form.component';


const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      {
        path: 'users',
        component: UserTableComponent
      },
      {
        path: 'blogs',
        component: BlogTableComponent,
      },
      {
        path: 'blogs/add',
        component: BlogFormComponent
      },
      {
        path: 'home-info',
        component: HomeInfoFormComponent
      }
    ],
  }
];

@NgModule({
  declarations: [
    AdminDashboardComponent,
    EditorComponent,
    UserTableComponent,
    BlogTableComponent,
    BlogFormComponent,
    HomeInfoFormComponent
  ],
  imports: [
    CommonModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
})
export class AdminModule { }
