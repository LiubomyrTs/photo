import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AlertsService } from 'src/app/shared/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { ALERT_TYPES } from 'src/app/shared/enums/alert-types.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = this.formBuilder.group({
    username: '',
    password: ''
  });

  constructor(
    private alertService: AlertsService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

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
        // this.router.navigate(['/dashboard', response.user.id]);
      })
  }
}
