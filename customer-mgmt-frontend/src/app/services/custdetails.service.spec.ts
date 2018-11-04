import { TestBed, inject } from '@angular/core/testing';

import { CustdetailsService } from './custdetails.service';

describe('CustdetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustdetailsService]
    });
  });

  it('should be created', inject([CustdetailsService], (service: CustdetailsService) => {
    expect(service).toBeTruthy();
  }));
});
