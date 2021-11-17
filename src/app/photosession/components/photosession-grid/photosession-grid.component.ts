import { Component, OnInit } from '@angular/core';
import { PhotosessionService } from 'src/app/photosession/services/photosession.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Photosesion } from 'src/app/photosession/interfaces/photosession.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photosession-grid',
  templateUrl: './photosession-grid.component.html',
  styleUrls: ['./photosession-grid.component.scss']
})
export class PhotosessionGridComponent implements OnInit {
  photosessions: Photosesion[];

  constructor(
    private authSerice: AuthService,
    private photosessionService: PhotosessionService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.photosessionService.getUsersPhotosessions(this.authSerice.user.id)
      .subscribe((photosessions: Photosesion[]) => { this.photosessions = photosessions })
  }

  handleCardClick(id: string) {
    this.router.navigate(['photosession', id]);
  }
}
