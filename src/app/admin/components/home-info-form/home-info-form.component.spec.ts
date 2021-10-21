import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInfoFormComponent } from './home-info-form.component';

describe('HomeInfoFormComponent', () => {
  let component: HomeInfoFormComponent;
  let fixture: ComponentFixture<HomeInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInfoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
