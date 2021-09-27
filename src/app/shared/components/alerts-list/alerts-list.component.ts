import { Component, OnInit, Injectable, ChangeDetectorRef, ChangeDetectionStrategy, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { ALERT_TYPES } from 'src/app/shared/enums/alert-types.enum';
import { AlertsService } from 'src/app/shared/services/alert.service';
import { Observable, timer, of } from 'rxjs';
import { tap, delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-alerts-list',
  templateUrl: './alerts-list.component.html',
  styleUrls: ['./alerts-list.component.scss'],
})

export class AlertsListComponent implements OnInit {
  alerts = new Map();
  constructor(
    private alertService: AlertsService,
  ) {}

  ngOnInit(): void {
    this.alertService.alerts
      .pipe(
        map((alert) => {
          const key = (new Date()).getTime();
          this.alerts.set(key, alert);
          return key;
        }),
        delay(5000),
      ).subscribe(this.handleClose.bind(this));
  }

  handleClose(key: number) {
    this.alerts.delete(key);
  }
}
