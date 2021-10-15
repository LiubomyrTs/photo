import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class  BlogService {
  constructor(
    private http: HttpClient
  ) {}

  getById(id: string) {
    return this.http.get(`blogs/${id}`)
  }

  getAll() {
    return this.http.get('blogs');
  }

  save(formData: FormData) {
    return this.http.post('blogs', formData);
  }

  delete(id:string) {
    return this.http.delete(`blogs/${id}`);
  }
}