import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { USER_ROLES } from 'src/app/auth/user-roles.enum';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(
    private http: HttpClient,
  ) { }

  isUserInRole(role: USER_ROLES) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      return user.role === role;
    }

    return false;
  }

  authenticateUser(user) {
    return this.http.post('users/authenticate', user)
      .pipe(
        tap((res: any) => {
          this.storeUserData(res.token, res.user)
        })
      );
  }

  private loadToken() {
    const token = localStorage.getItem('id_token');
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
    this.loadToken();
    headers = headers.append('Authorization', this.authToken);
    return this.http.get('users/profile', { headers });
  }
}
