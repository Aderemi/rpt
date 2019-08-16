import { TestBed } from '@angular/core/testing';

import { OutwardCashLetterAdjustmentService } from './outward-cash-letter-adjustment.service';

describe('OutwardCashLetterAdjustmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutwardCashLetterAdjustmentService = TestBed.get(OutwardCashLetterAdjustmentService);
    expect(service).toBeTruthy();
  });
});
