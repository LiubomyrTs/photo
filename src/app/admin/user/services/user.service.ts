import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from 'src/app/admin/user/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private authService: AuthService,
    private http: HttpClient,
  ) {}

  gelAll() {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', this.authService.authToken);
    return this.http.get<User[]>('users', { headers });
  }
}