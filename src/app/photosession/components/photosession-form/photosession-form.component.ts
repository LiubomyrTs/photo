import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbCalendar, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { PhotosessionService } from 'src/app/photosession/services/photosession.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ALERT_TYPES } from 'src/app/shared/enums/alert-types.enum';
import { finalize, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserService } from 'src/app/admin/user/services/user.service';
import { User } from 'src/app/admin/user/interfaces/user.interface';

@Component({
  selector: 'app-photosession-form',
  templateUrl: './photosession-form.component.html',
  styleUrls: ['./photosession-form.component.scss'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class PhotosessionFormComponent implements OnInit {
  form: FormGroup;
  loading = false;
  userId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alertService: AlertService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private photosessionService: PhotosessionService,
  ) {
    this.form = this.formBuilder.group({
      title: '',
      date: '',
      cover: '',
      photos: '',
    });
  }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params.id;
  }

  handleSubmit() {
    if (this.form.invalid) {
      // return;
    }
    const photosession = this.form.value;

    const formData = new FormData();
    formData.append('title', photosession.title);
    formData.append('date', photosession.date);
    formData.append('userId', this.userId);
    formData.append('cover', photosession.cover, photosession.cover.name);

    for (let i = 0; i < photosession.photos.length; i++) {
      formData.append('photos[]', photosession.photos[i]);
    }

    this.loading = true;

    this.userService.getById(this.userId)
      .pipe(
        switchMap((user: User) => {
          console.log(user.username);
          formData.append('username', user.username);
          return this.photosessionService.save(formData);
        }),
        finalize(() => this.loading = false)
      )
      .subscribe(() => {
        this.alertService.showAlert(ALERT_TYPES.SUCCESS, 'Фотосесію створено');
      })
  }
}
