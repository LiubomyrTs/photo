import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from 'src/app/core/footer/footer.component';
import { MainModule } from 'src/app/main/main.module';
import { BlogModule } from 'src/app/blog/blog.module';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ExperimentalService } from 'src/app/experimental.sevice';
import { SharedModule } from 'src/app/shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    BlogModule,
    BrowserModule,
    FormsModule,
    MainModule,
    HttpClientModule,
    EditorModule,
  ],
  providers: [
    AuthService,
    ExperimentalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
