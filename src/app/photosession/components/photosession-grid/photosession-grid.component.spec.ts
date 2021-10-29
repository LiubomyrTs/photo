import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosessionGridComponent } from './photosession-grid.component';

describe('PhotosessionGridComponent', () => {
  let component: PhotosessionGridComponent;
  let fixture: ComponentFixture<PhotosessionGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosessionGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosessionGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
