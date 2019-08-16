import { TestBed } from '@angular/core/testing';

import { OutwardBankChequeCancellationService } from './outward-bank-cheque-cancellation.service';

describe('OutwardBankChequeCancellationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutwardBankChequeCancellationService = TestBed.get(OutwardBankChequeCancellationService);
    expect(service).toBeTruthy();
  });
});
