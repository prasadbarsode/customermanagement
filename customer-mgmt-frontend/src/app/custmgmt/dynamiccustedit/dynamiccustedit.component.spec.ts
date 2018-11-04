import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiccusteditComponent } from './dynamiccustedit.component';

describe('DynamiccusteditComponent', () => {
  let component: DynamiccusteditComponent;
  let fixture: ComponentFixture<DynamiccusteditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamiccusteditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamiccusteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
