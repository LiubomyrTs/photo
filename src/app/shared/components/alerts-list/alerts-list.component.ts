import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-alerts-list',
  templateUrl: './alerts-list.component.html',
  styleUrls: ['./alerts-list.component.scss'],
})

@Injectable({
  providedIn: 'root'
})
export class AlertsListComponent implements OnInit {
  alerts = new Map();

  constructor() { }

  ngOnInit(): void {

  }

  showAlert(type, text) {
    this.alerts.set((new Date()).getTime(), { type, text })
  }

  handleClose(key) {
    this.alerts.delete(key);
  }
}
