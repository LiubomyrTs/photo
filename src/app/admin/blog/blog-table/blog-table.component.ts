import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/admin/blog/services/blog.service';
import { Blog } from 'src/app/admin/blog/interfaces/blog.interface';
import { environment } from 'src/environments/environment';

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
}
