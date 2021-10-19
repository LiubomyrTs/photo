import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { USER_ROLES } from 'src/app/auth/user-roles.enum';
import { AuthService } from 'src/app/auth/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    protected router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot) {
    return this.authService.isUserInRole(USER_ROLES.ADMIN);
  }
}
