import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/auth/auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private auhtService: AuthService
  ) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    if (this.auhtService.authToken) {
      const domainRequest = request.clone({
        headers: request.headers.set(
          'Authorization', this.auhtService.authToken
        )
      });
      return next.handle(domainRequest);
    } else {
      return next.handle(request);
    }
    
    // send cloned request with header to the next handler.
  }
}
