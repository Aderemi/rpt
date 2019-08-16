import { TestBed } from '@angular/core/testing';

import { OutwardCashLetterCreationService } from './outward-cash-letter-creation.service';

describe('OutwardCashLetterCreationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutwardCashLetterCreationService = TestBed.get(OutwardCashLetterCreationService);
    expect(service).toBeTruthy();
  });
});
