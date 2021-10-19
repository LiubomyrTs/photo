import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }
}
