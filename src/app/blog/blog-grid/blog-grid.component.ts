import { Component, OnInit, Input, OnChanges, DoCheck, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
})
export class BlogGridComponent implements OnInit, OnChanges, DoCheck {
  @Input() title = '';
  @Input() num: number;
  @Input() obj: any;

  blogs = [1,2,3];
  constructor(
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    console.log(this.title);
  }

  ngOnChanges() {
    console.log('SOMETHING CHANGED', 'BlogGridComponent');
  }

  ngDoCheck() {
    console.log('ngDoCheck', 'BlogGridComponent');
  }

  handleClick() {

  }
}
