import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

const ERROR_MESSAGES_MAP = {
  app_integer: 'Number must be the integer',
  app_whitespace: 'Field can not contain only spaces',
  email: 'Невірний email',
  fileextension: 'File extension is not supported',
  filesize: 'File size is too big',
  format: 'Wrong date format',
  hijridate: 'Please enter a valid date',
  max: 'Max acceptable value is {{max}}',
  maxlength: 'Максимум {{requiredLength}} символів',
  min: 'Min acceptable value is {{max}}',
  minlength: 'Мінімум {{requiredLength}} символів',
  pattern: 'Wrong input format',
  required: 'Поле обов\'язкове до заповнення',
};

@Component({
  selector: 'app-form-control-errors',
  templateUrl: './form-control-errors.component.html',
})
export class FormControlErrorsComponent implements OnInit, OnDestroy {
  @Input() controlName: Array<string | number> | string;
  @Input() customMessageKeys: object = {};
  @Input() ngForm: NgForm;

  errors: any[] = [];
  subscriptions: Subscription[];

  constructor(
  ) {}

  get formControl() {
    return this.ngForm.form.get(this.controlName);
  }

  ngOnInit() {
    this.subscriptions = [
      this.ngForm.ngSubmit.subscribe(this.buildErrors.bind(this)),
      this.formControl.statusChanges.subscribe(this.buildErrors.bind(this))
    ];
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.forEach((s: Subscription) => s.unsubscribe());
    }
  }

  buildErrors() {
    if (this.errors.length) {
      this.errors = [];
    }

    if (this.formControl.dirty && this.formControl.touched || this.ngForm.submitted) {
      this.errors = Object.keys(this.formControl.errors || {});
    }
  }

  getErrorMessage(error: string) {
    if (error === 'minlength' || error === 'maxlength') {
      return ERROR_MESSAGES_MAP[error].replace('{{requiredLength}}', this.formControl.errors[error].requiredLength);
    }
    return this.customMessageKeys[error] || ERROR_MESSAGES_MAP[error];
  }
}
