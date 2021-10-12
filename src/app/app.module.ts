import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

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
import { AuthService } from 'src/app/auth/auth.service';
import { DomainInterceptor } from 'src/app/core/interceptors/domain.interceptor';
import { GlobalErrorHandler } from 'src/app/shared/handlers/global-error.handler';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AuthInterceptor } from 'src/app/core/interceptors/auth.interceptor';

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
    { provide: ErrorHandler, useClass: GlobalErrorHandler, deps: [AlertService] },
    { provide: HTTP_INTERCEPTORS, useClass: DomainInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
