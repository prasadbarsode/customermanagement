import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustdetailsService } from '../../services/custdetails.service';

import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkDirectiveStub } from '../../mocks/router-link-directive-stub';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CustDetailsServiceMock } from '../../mocks/custdetails.service.mock';
import { ViewcustdetailsComponent } from './viewcustdetails.component';
import { ValidaterulesService } from '../../services/validaterules.service'

describe('ViewcustdetailsComponent', () => {
  let component: ViewcustdetailsComponent;
  let fixture: ComponentFixture<ViewcustdetailsComponent>;

  beforeEach(async(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    const custdetailsServiceSpy = jasmine.createSpyObj('CustDetailsServiceMock', ['getCustomerData']);


    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ViewcustdetailsComponent,
        //RouterOutletStubComponent,
        RouterLinkDirectiveStub ],
      schemas:      [NO_ERRORS_SCHEMA],
      providers: [
          { provide: CustdetailsService, useClass: CustDetailsServiceMock },
            ValidaterulesService
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(ViewcustdetailsComponent);
      component = fixture.componentInstance; // ViewcustdetailsComponent test instance
      fixture.detectChanges();
      // getHeroes spy returns observable of test heroes
      //custdetailsServiceSpy.getCustomerData.and.returnValue(asyncData(getCustomerData()));
    });

  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it(`should have one user`, async(() => {
    expect(component.customerDataRes.length).toEqual(1);
  }));

});
