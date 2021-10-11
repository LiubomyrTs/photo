import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminDashboardComponent } from 'src/app/admin/admin-dashboard/admin-dashboard.component';
import { EditorComponent } from 'src/app/admin/editor/editor.component';
import { UserTableComponent } from 'src/app/admin/user/user-table/user-table.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [{
      path: 'users',
      component: UserTableComponent
    }],
  }
];

@NgModule({
  declarations: [
    AdminDashboardComponent,
    EditorComponent,
    UserTableComponent
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
