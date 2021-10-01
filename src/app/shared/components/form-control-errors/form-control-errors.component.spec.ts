import {FormsModule, ReactiveFormsModule, FormBuilder, NgForm} from '@angular/forms';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {TranslateService, TranslateParser, TranslateModule} from '@ngx-translate/core';

import {TranslateParserMock} from 'app/core/mocks/translate-parser.mock';
import {NgFormMock} from 'app/core/mocks/ng-form.mock';
import {TranslateServiceMock} from 'app/core/mocks/translate.service.mock';

import {FormControlErrorsComponent} from './form-control-errors.component';

describe('FormControlErrorsComponent', () => {
  let component: FormControlErrorsComponent;
  let fixture: ComponentFixture<FormControlErrorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        FormBuilder,
        {provide: TranslateService, useClass: TranslateServiceMock},
        {provide: NgForm, useClass: NgFormMock},
        {provide: TranslateParser, useClass: TranslateParserMock}
      ],
      declarations: [
        FormControlErrorsComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot()
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlErrorsComponent);
    component = fixture.componentInstance;
    component.ngForm = TestBed.inject(NgForm);
    component.controlName = 'first';
    fixture.detectChanges();
  });

  describe('ngOnInit', () => {
    it('should subscribe', () => {
      component.ngOnInit();
      expect(component.subscriptions.length).toEqual(2);
    });
  });

  describe('formControl', () => {
    it('should return formcontrol', () => {
      const formControl = component.ngForm.form.get('first');
      expect(component.formControl).toEqual(formControl);
    });
  });

  describe('ngOnDestroy', () => {
    it('should unsubscribe', () => {
      component.ngOnInit();
      component.subscriptions.forEach(s => spyOn(s, 'unsubscribe').and.callThrough());
      component.ngOnDestroy();
      component.subscriptions.forEach(s => expect(s.unsubscribe).toHaveBeenCalled());
    });

    it('should do nothing if no subscriptions', () => {
      spyOn(component, 'ngOnDestroy').and.callThrough();
      component.subscriptions = null;
      component.ngOnDestroy();
      expect(component.ngOnDestroy).toHaveBeenCalled();
    });
  });

  describe('buildErrors', () => {
    it('should clear errors if form valid', () => {
      component.errors = [{}];
      component.buildErrors();
      expect(component.errors).toEqual([]);
    });

    it('should clear errors if form is invalid', () => {
      component.errors = [{}];
      component.formControl.markAsDirty();
      component.formControl.markAsTouched();
      (component.ngForm as any).submitted = true;
      component.buildErrors();
      expect(component.errors).toEqual([]);
    });

    it('should set errors if form is invalid', () => {
      component.formControl.setErrors(
        {incorrect: true}
      );
      component.formControl.markAsDirty();
      component.formControl.markAsTouched();
      component.buildErrors();
      expect(component.errors).toEqual(['incorrect']);
    });
  });

  describe('getErrorMessage', () => {
    it('should return translated error', () => {
      expect(component.getErrorMessage('email')).toEqual('Wrong email address format');
    });

    it('should return interpolated error', () => {
      component.formControl.setErrors(
        {incorrect: true}
      );
      expect(component.getErrorMessage('email')).toEqual('Interpolated text');
    });
  });
});
