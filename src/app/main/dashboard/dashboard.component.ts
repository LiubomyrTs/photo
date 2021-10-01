import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { map, switchMap } from 'rxjs/operators';

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
        console.log(profile);
      })
  }
}
