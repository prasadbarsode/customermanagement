import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenEditFormGroupComponent } from './gen-edit-form-group.component';

describe('GenEditFormGroupComponent', () => {
  let component: GenEditFormGroupComponent;
  let fixture: ComponentFixture<GenEditFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenEditFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenEditFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
