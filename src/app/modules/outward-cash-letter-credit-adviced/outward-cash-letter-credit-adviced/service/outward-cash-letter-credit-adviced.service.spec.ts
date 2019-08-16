import { TestBed } from '@angular/core/testing';

import { OutwardCashLetterCreditAdvicedService } from './outward-cash-letter-credit-adviced.service';

describe('OutwardCashLetterCreditAdvicedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutwardCashLetterCreditAdvicedService = TestBed.get(OutwardCashLetterCreditAdvicedService);
    expect(service).toBeTruthy();
  });
});
