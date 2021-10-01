import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AlertsListComponent } from 'src/app/shared/components/alerts-list/alerts-list.component';


describe('AlertComponent', () => {
  let component: AlertsListComponent;
  let fixture: ComponentFixture<AlertsListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
