import { TestBed, inject } from '@angular/core/testing';

import { EditCustControlService } from './edit-cust-control.service';

describe('EditCustControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditCustControlService]
    });
  });

  it('should be created', inject([EditCustControlService], (service: EditCustControlService) => {
    expect(service).toBeTruthy();
  }));
});
