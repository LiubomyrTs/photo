import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosessionService } from 'src/app/photosession/services/photosession.service';
import { Photosesion } from 'src/app/photosession/interfaces/photosession.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-photosession-view',
  templateUrl: './photosession-view.component.html',
  styleUrls: ['./photosession-view.component.scss']
})
export class PhotosessionViewComponent implements OnInit {
  photosession: Photosesion;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private photosessionSevice: PhotosessionService,
  ) { }

  ngOnInit(): void {
    const photosessionId = this.activatedRoute.snapshot.params.id;

    this.photosessionSevice.getById(photosessionId)
      .subscribe((photosession: Photosesion) => {
        this.photosession = photosession;
      });
  }

}
