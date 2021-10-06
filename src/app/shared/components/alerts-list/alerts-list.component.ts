import { Component, OnInit, Injectable, ChangeDetectorRef, ChangeDetectionStrategy, OnChanges, SimpleChange, SimpleChanges, AfterViewInit } from '@angular/core';
import { ALERT_TYPES } from 'src/app/shared/enums/alert-types.enum';
import { AlertService } from 'src/app/shared/services/alert.service';
import { delay, map } from 'rxjs/operators';
import { Alert } from 'src/app/shared/models/alert.model';

@Component({
  selector: 'app-alerts-list',
  templateUrl: './alerts-list.component.html',
  styleUrls: ['./alerts-list.component.scss'],
})

export class AlertsListComponent implements OnInit {
  alerts: Map<number, Alert> = new Map();
  ALERT_TYPES = ALERT_TYPES;
  constructor(
    private changeDetector: ChangeDetectorRef,
    private alertService: AlertService,
    ) {}

  ngOnInit(): void {
    this.alertService.alerts
      .pipe(
        map((alert: Alert) => {
          const key = (new Date()).getTime();
          this.alerts.set(key, alert);
          this.changeDetector.detectChanges();
          return key;
        }),
        delay(5000),
      ).subscribe(this.handleClose.bind(this));
  }

  handleClose(key: number) {
    this.alerts.delete(key);
    this.changeDetector.detectChanges();
  }
}
