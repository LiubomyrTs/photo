import { Component, OnInit} from "@angular/core";
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"],
})
export class AdminDashboardComponent implements OnInit {
  content = '';
  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // this.loadContent();
  }

  logout() {
    this.authService.logout();
  }
}
