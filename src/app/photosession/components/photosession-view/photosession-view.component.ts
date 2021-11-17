import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PhotosessionService } from "src/app/photosession/services/photosession.service";
import { Photosesion } from "src/app/photosession/interfaces/photosession.interface";
import { AuthService } from "src/app/auth/services/auth.service";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { PhotosessionGalleryModalComponent } from "src/app/photosession/components/photosession-gallery-modal/photosession-gallery-modal.component";
import * as Masonry from "masonry-layout";
import { Subject } from "rxjs";
import { skip, tap, switchMap } from "rxjs/operators";

@Component({
  selector: "app-photosession-view",
  templateUrl: "./photosession-view.component.html",
  styleUrls: ["./photosession-view.component.scss"],
})
export class PhotosessionViewComponent implements OnInit {
  coverLoading = true;
  imageLoadSubject = new Subject();

  photosToLoad: string[];
  photosession: Photosesion;
  photosLoaded = 0;
  allowLoadingNewPhotos = false;
  newPhotosLoading = true;

  imagesLoaded = 10;
  @ViewChild("photoGrid") photoGrid: ElementRef;
  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private modalService: NgbModal,
    private photosessionSevice: PhotosessionService
  ) {}

  ngOnInit() {
    const photosessionId = this.activatedRoute.snapshot.params.id;

    this.photosessionSevice
      .getById(photosessionId)
      .pipe(
        tap((photosession: Photosesion) => {
          this.photosession = photosession;
          this.photosToLoad = photosession.photos.slice(0, 10);
        })
      )
      .subscribe(() => {
        this.imageLoadSubject
        .subscribe(() => {
          if (this.photosLoaded === this.photosToLoad.length) {
            this.allowLoadingNewPhotos = true;
            this.newPhotosLoading = false;
            console.log(this.photosToLoad.length);
            setTimeout(() => {
              console.log('msnry triggered');
              const msnry = new Masonry(".grid", {
                itemSelector: ".grid-item",
                gutter: 10,
              });
            });
          }
        });
      });
  }

  handleCartClick(event: MouseEvent) {
    event.stopPropagation();
    console.log("cart clicked");
  }

  handleOpenGallery() {
    const modalRef: NgbModalRef = this.modalService.open(
      PhotosessionGalleryModalComponent,
      { modalDialogClass: "image-modal" }
    );
    modalRef.componentInstance.photos = this.photosession.photos;
  }

  onImageLoad(event: any) {
    this.photosLoaded++;
    this.imageLoadSubject.next("");
  }

  @HostListener("window:scroll")
  handleScroll() {

    //refactor
    const distanceToTop = this.photoGrid.nativeElement.getBoundingClientRect().top + window.scrollY;
    if (window.scrollY + window.innerHeight > distanceToTop + 100 && this.allowLoadingNewPhotos) {
      console.log('scrollTriggered');
      this.allowLoadingNewPhotos = false;
      const loadedPhotosAmount = this.photosToLoad.length;
      this.photosToLoad = [ ...this.photosToLoad, ...this.photosession.photos.slice(this.photosToLoad.length, this.photosToLoad.length + 10) ];
      this.newPhotosLoading = true;
      if (this.photosToLoad.length === loadedPhotosAmount) {
        this.newPhotosLoading = false;
      }
    }
  }
}
