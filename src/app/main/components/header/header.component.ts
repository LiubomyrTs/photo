import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  dashboardUrl: string[];

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.loggedInSubject.subscribe((isLoggedIn) => this.isLoggedIn = isLoggedIn);
    this.dashboardUrl = this.authService.dashboardUrl;
  }

  logout() {
    this.authService.logout();
  }
}
