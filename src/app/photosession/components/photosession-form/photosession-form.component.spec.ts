import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosessionFormComponent } from './photosession-form.component';

describe('PhotosessionFormComponent', () => {
  let component: PhotosessionFormComponent;
  let fixture: ComponentFixture<PhotosessionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosessionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosessionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
