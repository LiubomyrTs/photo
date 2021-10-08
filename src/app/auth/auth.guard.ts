import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { USER_ROLES } from 'src/app/auth/user-roles.enum';


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
