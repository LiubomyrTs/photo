import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminDashboardComponent } from 'src/app/admin/admin-dashboard/admin-dashboard.component';
import { EditorComponent } from 'src/app/admin/editor/editor.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent
  }
];

@NgModule({
  declarations: [
    AdminDashboardComponent,
    EditorComponent
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
