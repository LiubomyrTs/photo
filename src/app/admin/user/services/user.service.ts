import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { User } from 'src/app/admin/user/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private authService: AuthService,
    private http: HttpClient,
  ) {}

  gelAll() {
    return this.http.get<User[]>('users');
  }

  getById(id) {
    return this.http.get(`users/${id}`);
  }
}