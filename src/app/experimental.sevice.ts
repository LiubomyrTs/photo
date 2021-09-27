import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperimentalService {
  key: 'HTML_KEY';

  save(content) {
    window.localStorage.setItem(this.key, content);
  }

  fetch() {
    return window.localStorage.getItem(this.key);
  }
}