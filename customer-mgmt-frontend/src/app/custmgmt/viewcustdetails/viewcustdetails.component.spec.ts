import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CustdetailsService } from '../../services/custdetails.service';

import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkDirectiveStub } from '../../mocks/router-link-directive-stub';
import {Router} from "@angular/router";
import {BaseRequestOptions, ConnectionBackend, Http, RequestOptions} from '@angular/http';

import { MockBackend } from '@angular/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { CustDetailsServiceMock } from '../../mocks/custdetails.service.mock';
import { ViewcustdetailsComponent } from './viewcustdetails.component';
import { ValidaterulesService } from '../../services/validaterules.service'
import { EditcustomerdetailsComponent } from '../editcustomerdetails/editcustomerdetails.component';

describe('ViewcustdetailsComponent', () => {
  let component: ViewcustdetailsComponent;
  let fixture: ComponentFixture<ViewcustdetailsComponent>;
  
  beforeEach(async(() => {
    
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    const custdetailsServiceSpy = jasmine.createSpyObj('CustDetailsServiceMock', ['getCustomerData']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        { path: 'editcustomerdetails/:id', component: EditcustomerdetailsComponent }
       ])],
      declarations: [ ViewcustdetailsComponent,
        EditcustomerdetailsComponent,
        RouterLinkDirectiveStub ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
          { provide: CustdetailsService, useClass: CustDetailsServiceMock },
          {provide: ConnectionBackend, useClass: MockBackend},
          {provide: RequestOptions, useClass: BaseRequestOptions},
            Http,
            ValidaterulesService
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(ViewcustdetailsComponent);
      component = fixture.componentInstance; // ViewcustdetailsComponent test instance
      fixture.detectChanges();
      
    });

  }));

  it(`should have two customers`, async(() => {
    expect(component.customerDataRes.length).toEqual(2);
  }));

});
