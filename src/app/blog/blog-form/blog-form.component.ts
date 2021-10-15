import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
import { BlogService } from 'src/app/blog/services/blog.service';
import { Blog } from 'src/app/blog/interfaces/blog.interface';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {
  form: FormGroup;
  constructor(
    private blogService: BlogService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form  = this.formBuilder.group({
      title: '',
      subtitle: '',
      cover: '',
      content: ''
    })
  }

  ngOnInit(): void {
  }

  handleSubmit() {
    if (this.form.invalid) {
      return;
    }
    const formData = new FormData();

    const blog = this.form.value;

    formData.append('cover', blog.cover, blog.cover.name);
    formData.append('title', blog.title);
    formData.append('subtitle', blog.subtitle);
    formData.append('content', blog.content);

    this.blogService.save(formData).subscribe((blog: Blog) => {
      this.router.navigate(['admin', 'blogs']);
    });
  }
}
