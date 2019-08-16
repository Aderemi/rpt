import { TestBed } from '@angular/core/testing';

import { OutwardCashLetterChequeCreationService } from './outward-cash-letter-cheque-creation.service';

describe('OutwardCashLetterChequeCreationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutwardCashLetterChequeCreationService = TestBed.get(OutwardCashLetterChequeCreationService);
    expect(service).toBeTruthy();
  });
});
