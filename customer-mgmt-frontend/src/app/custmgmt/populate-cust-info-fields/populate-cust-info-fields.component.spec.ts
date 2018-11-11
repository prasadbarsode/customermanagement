import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';
import { PopulateCustInfoFieldsComponent } from './populate-cust-info-fields.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

class MockEditCustService { 
  //employeeList: AngularFireList<any>;

  form = new FormGroup({
    type: new FormControl('1'),
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    country: new FormControl('', Validators.required),
    websiteUrl: new FormControl(''),
    numberOfEmployees: new FormControl('', Validators.required),
    contractExpiryDate: new FormControl('', Validators.required),
  });

  updateEmployee() {
    return true;
  }
}



describe('PopulateCustInfoFieldsComponent', () => {
  let component: PopulateCustInfoFieldsComponent;
  let fixture: ComponentFixture<PopulateCustInfoFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, NgbModule.forRoot()],
      //imports: [FormsModule, ReactiveFormsModule],
      declarations: [ PopulateCustInfoFieldsComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulateCustInfoFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
