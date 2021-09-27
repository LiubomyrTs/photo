import { Component, OnInit } from '@angular/core';
import { FormBuilder, ValidatorFn, ValidationErrors, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertsListComponent } from 'src/app/shared/components/alerts-list/alerts-list.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertService: AlertsListComponent
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

  ngOnInit(): void {
  }

  handleSubmit() {
    if (this.form.invalid) {
      return;
    }

    const user = this.form.value;
    delete user.confirm_password;
    this.authService.registerUser(this.form.value)
      .subscribe((response) => {
        console.log(response);
        this.alertService.showAlert('success', 'Реєстрація пройшла успішно');
      });
  }
}
