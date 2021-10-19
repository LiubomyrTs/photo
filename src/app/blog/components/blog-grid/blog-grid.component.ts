import { Component, OnInit, Input, OnChanges, DoCheck, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Blog } from 'src/app/blog/interfaces/blog.interface';
import { BlogService } from 'src/app/blog/services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
})
export class BlogGridComponent implements OnInit {
  @Input() title = '';
  @Input() mainPage = false;
  @Input() num: number;
  @Input() obj: any;

  blogs: Blog[] = [];
  constructor(
    private router: Router,
    private blogService: BlogService,
  ) { }

  ngOnInit(): void {
    this.blogService.getAll()
      .subscribe((blogs: Blog[]) => {
        this.blogs = blogs;
      });
  }

  handleCardClick(id) {
    this.router.navigate(['blog', id]);
  }
}
