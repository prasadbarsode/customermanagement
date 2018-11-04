import { TestBed, inject } from '@angular/core/testing';

import { ValidaterulesService } from './validaterules.service';

describe('ValidaterulesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidaterulesService]
    });
  });

  it('should be created', inject([ValidaterulesService], (service: ValidaterulesService) => {
    expect(service).toBeTruthy();
  }));
});
