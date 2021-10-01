import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, ValidatorFn, ValidationErrors, FormGroup } from '@angular/forms';

import { AlertsService } from 'src/app/shared/services/alert.service';
import { ALERT_TYPES } from 'src/app/shared/enums/alert-types.enum';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {

  constructor(
    private alertsService: AlertsService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  form = this.formBuilder.group({
    name: '',
    email: '',
    username: '',
    password: '',
    confirm_password: '',
  }, { validator: this.confirmPasswordValidator() });

  confirmPasswordValidator(): ValidatorFn {
    return (formGroup: FormGroup): ValidationErrors | null => {
      const isPasswordMatching = formGroup.get('confirm_password').value === formGroup.get('password').value;
      return !isPasswordMatching ? { confirmPassword: true } : null;
    }
  }

  handleSubmit() {
    if (this.form.invalid) {
      return;
    }

    const user = this.form.value;
    delete user.confirm_password;
    this.authService.registerUser(this.form.value)
      .subscribe(() => {
        this.alertsService.showAlert(ALERT_TYPES.SUCCESS, 'Вас успішно зареєстровано!');
        this.router.navigate(['/login']);
      });
  }
}
