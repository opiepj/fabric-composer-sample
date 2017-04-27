import { TestBed, inject } from '@angular/core/testing';

import { SalesAgreementService } from './sales-agreement.service';

describe('SalesAgreementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalesAgreementService]
    });
  });

  it('should ...', inject([SalesAgreementService], (service: SalesAgreementService) => {
    expect(service).toBeTruthy();
  }));
});
