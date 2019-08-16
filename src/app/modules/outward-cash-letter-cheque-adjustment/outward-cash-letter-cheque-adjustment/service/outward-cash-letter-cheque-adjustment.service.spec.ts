import { TestBed } from '@angular/core/testing';

import { OutwardCashLetterChequeAdjustmentService } from './outward-cash-letter-cheque-adjustment.service';

describe('OutwardCashLetterChequeAdjustmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutwardCashLetterChequeAdjustmentService = TestBed.get(OutwardCashLetterChequeAdjustmentService);
    expect(service).toBeTruthy();
  });
});
