import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeInfo } from 'src/app/main/interfaces/home-info.interface';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeInfoService {

  constructor(
    private http: HttpClient
  ) { }

  save(formData: FormData) {
    return this.http.post('home-info', formData);
  }

  get() {
    return this.http.get<HomeInfo>('home-info');
  }

  getPhotos(fileUrls: string[]) {
    const fileRequests = fileUrls.map((url) => this.http.get(url, { responseType: 'blob' }));
    return forkJoin(fileRequests);
  }
}
