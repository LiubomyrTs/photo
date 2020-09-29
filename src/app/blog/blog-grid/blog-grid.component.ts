import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
})
export class BlogGridComponent implements OnInit {

  blogs = [1,2,3];
  constructor() { }

  ngOnInit(): void {
  }

}
