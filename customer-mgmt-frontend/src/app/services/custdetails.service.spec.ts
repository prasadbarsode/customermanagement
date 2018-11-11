import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CustdetailsService } from './custdetails.service';

import {BaseRequestOptions, ConnectionBackend, Http, RequestOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

describe('CustdetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustdetailsService, Http,
        {provide: ConnectionBackend, useClass: MockBackend},
        {provide: RequestOptions, useClass: BaseRequestOptions}],
      imports: [RouterTestingModule]
    });
  });

  it('should be created', inject([CustdetailsService], (service: CustdetailsService) => {
    expect(service).toBeTruthy();
  }));
});
