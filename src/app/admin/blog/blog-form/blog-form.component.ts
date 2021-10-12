import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BlogService } from 'src/app/admin/blog/services/blog.service';
import { Blog } from 'src/app/admin/blog/interfaces/blog.interface';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {
  form: FormGroup;
  constructor(
    private blogService: BlogService,
    private formBuilder: FormBuilder
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
    const formData = new FormData();

    const blog = this.form.value;

    formData.append('cover', blog.cover, blog.cover.name);
    formData.append('title', blog.title);
    formData.append('subtitle', blog.subtitle);
    formData.append('content', blog.content);

    this.blogService.save(formData).subscribe((blog: Blog) => {
      console.log(blog);
    });
  }
}
