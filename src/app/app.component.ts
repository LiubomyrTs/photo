import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LAYOUT } from 'src/app/core/enums/layout.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'photo';
  layout = LAYOUT.MAIN;
  LAYOUT = LAYOUT;

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof RoutesRecognized)
      ).subscribe((event: RoutesRecognized) => {
        let routerSnapshot = event.state.root.firstChild;
        const data = routerSnapshot.data;
        if (data.layout) {
          this.layout = data.layout;
        } else {
          this.layout = LAYOUT.MAIN;
        }
        console.log(this.layout);
      });
  }

}
