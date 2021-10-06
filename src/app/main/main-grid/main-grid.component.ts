import { Component, OnInit, OnChanges, DoCheck, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.scss'],
})
export class MainGridComponent implements OnInit, OnChanges, DoCheck {
  content = '';
  title = 'Блог';
  num = 1;
  obj = {
    name: '123',
    surname: '321'
  }

  constructor(
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log('SOMETHING CHANGED', 'MainGridComponent');
  }

  ngDoCheck() {
    console.log('ngDoCheck', 'MainGridComponent');
  }

  clickTitle() {
    // this.cd.detach();
    // this.num = 5;
    this.obj.name = 'normal name';
    this.obj = Object.assign({}, this.obj);
    console.log('clickTitle');
  }
}
