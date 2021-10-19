import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { USER_ROLES } from 'src/app/auth/user-roles.enum';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.loadToken();
  }

  loggedInSubject = new BehaviorSubject<boolean>(this.isLoggedIn());

  get dashboardUrl() {
    return this.isUserInRole(USER_ROLES.ADMIN) ? ['/admin'] : ['/dashboard'];
  }

  isUserInRole(role: USER_ROLES) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      return user.role === role;
    }

    return false;
  }

  isLoggedIn() {
    if (localStorage.getItem('user')) {
      return true;
    } else {
      return false;
    }
  }

  authenticateUser(user) {
    return this.http.post('users/authenticate', user)
      .pipe(
        tap((res: any) => {
          this.storeUserData(res.token, res.user)
        })
      );
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('id_token');
    this.authToken = null;
    this.user = null;
    this.router.navigate(['/']);
    this.loggedInSubject.next(false);
  }

  private loadToken() {
    const token = localStorage.getItem('id_token') || null;
    this.authToken = token;
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  registerUser(user) {
    return this.http.post('users/register', user);
  }

  profile() {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', this.authToken);
    return this.http.get('users/profile', { headers });
  }
}
