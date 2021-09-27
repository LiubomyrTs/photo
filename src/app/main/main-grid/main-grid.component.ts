import { Component, OnInit, OnChanges, DoCheck, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ExperimentalService } from 'src/app/experimental.sevice';

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
    private experimentalService: ExperimentalService
  ) { }

  ngOnInit(): void {
    this.content = this.experimentalService.fetch();
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
