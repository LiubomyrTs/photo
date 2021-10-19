import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog/services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/blog/interfaces/blog.interface';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit {
  blog: Blog;

  constructor(
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.blogService.getById(id).subscribe((blog: Blog) => this.blog = blog);
  }
}
