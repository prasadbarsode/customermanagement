import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcustdetailsComponent } from './viewcustdetails.component';

describe('ViewcustdetailsComponent', () => {
  let component: ViewcustdetailsComponent;
  let fixture: ComponentFixture<ViewcustdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcustdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcustdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
