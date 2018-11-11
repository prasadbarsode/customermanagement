import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GenEditFormGroupComponent } from './gen-edit-form-group.component';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';
import { CustdetailsService } from '../../services/custdetails.service';
import {BaseRequestOptions, ConnectionBackend, Http, RequestOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { ActivatedRoute, ActivatedRouteStub } from '../../mocks/activated-route-stub';
import { RouterTestingModule } from '@angular/router/testing';
import { ValidaterulesService } from '../../services/validaterules.service';

describe('GenEditFormGroupComponent', () => {
  ////// Testing Vars //////
  let activatedRoute: ActivatedRouteStub;
  let component: GenEditFormGroupComponent;
  let fixture: ComponentFixture<GenEditFormGroupComponent>;

  ////// Tests //////
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule, ReactiveFormsModule, RouterTestingModule],
      declarations: [ GenEditFormGroupComponent],
      providers: [CustdetailsService, ValidaterulesService,
        {provide: ConnectionBackend, useClass: MockBackend},
        {provide: RequestOptions, useClass: BaseRequestOptions},
        Http,],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    activatedRoute = new ActivatedRouteStub();
    fixture = TestBed.createComponent(GenEditFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
