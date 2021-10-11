import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

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
