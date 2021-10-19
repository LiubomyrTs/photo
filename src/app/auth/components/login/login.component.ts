import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AlertService } from 'src/app/shared/services/alert.service';
import { ALERT_TYPES } from 'src/app/shared/enums/alert-types.enum';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private alertService: AlertService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  handleSubmit() {
    if (!this.form.valid) {
      return;
    }

    const user = this.form.value;
    this.authService.authenticateUser(user)
      .subscribe((response: {success: boolean, user: any, token: string}) => {
        this.alertService.showAlert(ALERT_TYPES.SUCCESS, 'Ви успішно увійшли в систему');
        this.authService.loggedInSubject.next(true);
        this.router.navigate(this.authService.dashboardUrl);
      })
  }
}
