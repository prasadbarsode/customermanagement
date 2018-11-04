import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulateCustInfoFieldsComponent } from './populate-cust-info-fields.component';

describe('PopulateCustInfoFieldsComponent', () => {
  let component: PopulateCustInfoFieldsComponent;
  let fixture: ComponentFixture<PopulateCustInfoFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulateCustInfoFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulateCustInfoFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
