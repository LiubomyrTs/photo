import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: any;
  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.authService.profile()
      .subscribe((profile: any) => {
        this.user = profile.user;
      })
  }
}
