import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosessionGalleryModalComponent } from './photosession-gallery-modal.component';

describe('PhotosessionGalleryModalComponent', () => {
  let component: PhotosessionGalleryModalComponent;
  let fixture: ComponentFixture<PhotosessionGalleryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosessionGalleryModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosessionGalleryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
