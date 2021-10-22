import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HomeInfoService } from 'src/app/admin/services/home-info.service';
import { HomeInfo } from 'src/app/main/interfaces/home-info.interface';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ALERT_TYPES } from 'src/app/shared/enums/alert-types.enum';

@Component({
  selector: 'app-home-info-form',
  templateUrl: './home-info-form.component.html',
  styleUrls: ['./home-info-form.component.scss']
})
export class HomeInfoFormComponent implements OnInit {
  form: FormGroup;
  homeInfo: HomeInfo;
  constructor(
    private formBuilder: FormBuilder,
    private homeInfoService: HomeInfoService,
    private router: Router,
    private alertService: AlertService
  ) {
    this.form = formBuilder.group({
      title: '',
      cardTitle: '',
      cardText: '',
      carouselPhotos: '',
      cardPhotos: ''
    });
  }

  ngOnInit(): void {
    let photoUrls = [];
    this.homeInfoService.get()
      .pipe(
        switchMap((homeInfo) => {
          this.homeInfo = homeInfo;
          photoUrls = [ ...homeInfo.carouselPhotos, ...homeInfo.cardPhotos ];
          return this.homeInfoService.getPhotos(photoUrls);
        })
      )
      .subscribe((photos: any) => {
        photos.forEach((photo, index) => {
          photo.name = 'photo' + index,
          photo.url = photoUrls[index]
        });
        this.form.patchValue({
          ...this.homeInfo,
          carouselPhotos: photos.slice(0, this.homeInfo.carouselPhotos.length),
          cardPhotos: photos.slice(-this.homeInfo.cardPhotos.length)
        })
      });
  }

  handleSubmit() {
    console.log(this.form.get('carouselPhotos').value);
    console.log(this.form.get('cardPhotos').value);
    if (this.form.invalid) {
      return;
    }

    const formData = new FormData();
    const homeInfo = this.form.value
    formData.append('title', homeInfo.title);
    formData.append('cardTitle', homeInfo.cardTitle);
    formData.append('cardText', homeInfo.cardText);
    
    for (let i = 0; i < homeInfo.carouselPhotos.length; i++) {
      formData.append('carouselPhotos[]', homeInfo.carouselPhotos[i]);
    }
    
    for (let i = 0; i < homeInfo.cardPhotos.length; i++) {
      formData.append('cardPhotos[]', homeInfo.cardPhotos[i]);
    }

    this.homeInfoService.save(formData)
      .subscribe((res: any) => {
        this.router.navigate(['/admin']);
        this.alertService.showAlert(ALERT_TYPES.SUCCESS, res.msg);
      });
  }
}
