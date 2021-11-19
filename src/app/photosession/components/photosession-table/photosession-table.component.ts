import { Component, OnInit } from '@angular/core';
import { PhotosessionService } from 'src/app/photosession/services/photosession.service';
import { Photosession } from 'src/app/photosession/interfaces/photosession.interface';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ALERT_TYPES } from 'src/app/shared/enums/alert-types.enum';
import { MessageResponse } from 'src/app/shared/interfaces/message-response.interface';

@Component({
  selector: 'app-photosession-table',
  templateUrl: './photosession-table.component.html',
  styleUrls: ['./photosession-table.component.scss']
})
export class PhotosessionTableComponent implements OnInit {
  photosessions: Photosession[];
  loading: boolean;
  userId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private photosessionsService: PhotosessionService,
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params.id;
    this.getPhotosessions();
  }

  getPhotosessions() {
    this.loading = true;
    this.photosessionsService.getUsersPhotosessions(this.userId)
      .pipe(finalize(() => this.loading = false))
      .subscribe((photosessions: Photosession[]) => {
        this.photosessions = photosessions;
      });
  }

  deletePhotosession(id: string) {
    this.photosessionsService.delete(id)
      .subscribe((res: MessageResponse) => {
        this.alertService.showAlert(ALERT_TYPES.SUCCESS, res.msg);
        this.getPhotosessions();
      });
  }
}
