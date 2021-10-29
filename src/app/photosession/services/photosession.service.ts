import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosessionService {
  constructor(
    private http: HttpClient
  ) {}

  save(formData: FormData) {
    return this.http.post('photosessions', formData);
  }

  getUsersPhotosessions(userId) {
    return this.http.get(`photosessions?userId=${userId}`);
  }

  getById(photosessionId) {
    return this.http.get(`photosessions/${photosessionId}`);
  }
}