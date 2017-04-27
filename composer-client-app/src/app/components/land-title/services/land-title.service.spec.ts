import { TestBed, inject } from '@angular/core/testing';

import { LandTitleService } from './land-title.service';

describe('LandTitleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LandTitleService]
    });
  });

  it('should ...', inject([LandTitleService], (service: LandTitleService) => {
    expect(service).toBeTruthy();
  }));
});
