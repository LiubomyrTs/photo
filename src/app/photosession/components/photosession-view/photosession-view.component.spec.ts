import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosessionViewComponent } from './photosession-view.component';

describe('PhotosessionViewComponent', () => {
  let component: PhotosessionViewComponent;
  let fixture: ComponentFixture<PhotosessionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosessionViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosessionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
