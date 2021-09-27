import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(
    private http: HttpClient,
  ) { }

  // authenticateUser(user) {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.post('users/authenticate', user, { headers })
  //     .pipe(
  //       map(res => res.json())
  //     )
  // }

  // getProfile() {
  //   let headers = new Headers();
  //   this.loadToken();
  //   headers.append('Authorization', this.authToken);
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.get('users/profile', { headers })
  //     .pipe(
  //       map(res => res.json())
  //     )
  // }

  // loadToken() {
  //   const token = localStorage.getItem('id_token');
  //   this.authToken = token;
  // }

  // storeUserData(token, user) {
  //   localStorage.setItem('id_token', token);
  //   localStorage.setItem('user', JSON.stringify(user));
  //   this.authToken = token;
  //   this.user = user;
  // }

  registerUser(user) {
    let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.post('users/register', user)
  }

  // loggedIn() {
  //   return tokenNotExpired('id_token');
  // }

  // logout() {
  //   this.authToken = null;
  //   this.user = null;
  //   localStorage.clear();
  // }
}
