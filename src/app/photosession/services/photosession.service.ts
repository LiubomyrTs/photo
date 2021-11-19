import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photosession } from 'src/app/photosession/interfaces/photosession.interface';

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
    return this.http.get<Photosession[]>(`photosessions?userId=${userId}`);
  }

  getById(photosessionId) {
    return this.http.get<Photosession>(`photosessions/${photosessionId}`);
  }

  delete(photosessionId) {
    return this.http.delete(`photosessions/${photosessionId}`);
  }
}