import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosessionTableComponent } from './photosession-table.component';

describe('PhotosessionTableComponent', () => {
  let component: PhotosessionTableComponent;
  let fixture: ComponentFixture<PhotosessionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosessionTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosessionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
