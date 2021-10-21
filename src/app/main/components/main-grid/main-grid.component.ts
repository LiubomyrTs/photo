import { Component, OnInit } from '@angular/core';
import { HomeInfoService } from 'src/app/admin/services/home-info.service';

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.scss'],
})
export class MainGridComponent implements OnInit {
  content = '';
  title = 'Блог';
  num = 1;
  obj = {
    name: '123',
    surname: '321'
  }

  homeInfo: any;

  constructor(
    private homeInfoService: HomeInfoService,
  ) { }

  ngOnInit(): void {
    this.homeInfoService.get()
      .subscribe((homeInfo) => this.homeInfo = homeInfo);
  }
}
