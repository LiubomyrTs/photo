import { Component, OnInit, OnChanges, DoCheck, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainGridComponent implements OnInit, OnChanges, DoCheck {
  title = 'Блог';
  num = 1;
  obj = {
    name: '123',
    surname: '321'
  }

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.num = this.num * 2 ** 2;
    //   // this.cd.markForCheck();
    // }, 2000);
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
