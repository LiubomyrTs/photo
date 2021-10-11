import { Component, OnInit, Input, OnChanges, DoCheck, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
})
export class BlogGridComponent implements OnInit, OnChanges, DoCheck {
  @Input() title = '';
  @Input() mainPage = false;
  @Input() num: number;
  @Input() obj: any;

  blogs = [1,2,3, 1,2,2,2,2,2,2,2,2,2,2];
  constructor(
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    if (this.mainPage) {
      this.blogs = [1,2,3];
    }
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
