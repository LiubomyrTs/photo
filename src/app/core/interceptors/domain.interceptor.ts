import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class DomainInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    if (request.url.startsWith('http://') || request.url.startsWith('https://')) {
      return next.handle(request);
    }

    const domainRequest = request.clone({
      url: environment.serverUrl + request.url
    });
    
    // send cloned request with header to the next handler.
    return next.handle(domainRequest);
  }
}
