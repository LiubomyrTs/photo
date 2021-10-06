import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Alert } from 'src/app/shared/models/alert.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alerts: Subject<Alert> = new Subject();

  constructor() {}

  showAlert(type, text) {
    this.alerts.next({ type, text });
  }
}