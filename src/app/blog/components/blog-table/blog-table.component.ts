import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { BlogService } from 'src/app/blog/services/blog.service';
import { Blog } from 'src/app/blog/interfaces/blog.interface';

@Component({
  selector: 'app-blog-table',
  templateUrl: './blog-table.component.html',
  styleUrls: ['./blog-table.component.scss']
})
export class BlogTableComponent implements OnInit {
  blogs: Blog[];
  serverUrl = environment.serverUrl;

  constructor(
    private blogService: BlogService,
  ) {}

  ngOnInit(): void {
    this.blogService.getAll()
      .subscribe((blogs: Blog[]) => this.blogs = blogs);
  }

  handleDelete(id) {
    this.blogService.delete(id).subscribe();
  }
}
