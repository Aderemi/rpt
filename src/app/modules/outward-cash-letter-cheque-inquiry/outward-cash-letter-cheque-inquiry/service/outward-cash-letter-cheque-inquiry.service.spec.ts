import { TestBed } from '@angular/core/testing';

import { OutwardCashLetterChequeInquiryService } from './outward-cash-letter-cheque-inquiry.service';

describe('OutwardCashLetterChequeInquiryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutwardCashLetterChequeInquiryService = TestBed.get(OutwardCashLetterChequeInquiryService);
    expect(service).toBeTruthy();
  });
});
