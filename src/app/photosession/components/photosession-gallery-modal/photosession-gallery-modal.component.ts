import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import SwiperCore, { SwiperOptions, Keyboard } from 'swiper';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

SwiperCore.use([Keyboard]);

@Component({
  selector: 'app-photosession-gallery-modal',
  templateUrl: './photosession-gallery-modal.component.html',
  styleUrls: ['./photosession-gallery-modal.component.scss']
})
export class PhotosessionGalleryModalComponent {
  @Input() photos: string[];
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    keyboard: true,
  };

  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  handleClick(e: MouseEvent) {
    if ((e.target as HTMLElement).classList.contains('swiper-slide')) {
      this.activeModal.close();
    }
  }
}
