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
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { DomainInterceptor } from 'src/app/core/interceptors/domain.interceptor';

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
    { provide: HTTP_INTERCEPTORS, useClass: DomainInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
