import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class  BlogService {
  constructor(
    private http: HttpClient
  ) {}

  getAll() {
    return this.http.get('blogs');
  }

  save(formData: FormData) {
    return this.http.post('blogs', formData);
  }
}