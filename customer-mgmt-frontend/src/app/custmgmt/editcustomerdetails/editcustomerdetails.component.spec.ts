import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }         from '@angular/forms';
import { EditcustomerdetailsComponent } from './editcustomerdetails.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustdetailsService } from '../../services/custdetails.service';
import {BaseRequestOptions, ConnectionBackend, Http, RequestOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditcustomerdetailsComponent', () => {
  let component: EditcustomerdetailsComponent;
  let fixture: ComponentFixture<EditcustomerdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, NgbModule.forRoot(), RouterTestingModule],
      declarations: [ EditcustomerdetailsComponent ],
      providers: [CustdetailsService, Http,
        {provide: ConnectionBackend, useClass: MockBackend},
        {provide: RequestOptions, useClass: BaseRequestOptions}]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcustomerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
