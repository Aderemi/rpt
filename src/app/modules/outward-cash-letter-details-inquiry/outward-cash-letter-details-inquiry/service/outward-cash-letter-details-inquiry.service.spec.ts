import { TestBed } from '@angular/core/testing';

import { OutwardCashLetterDetailsInquiryService } from './outward-cash-letter-details-inquiry.service';

describe('OutwardCashLetterDetailsInquiryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutwardCashLetterDetailsInquiryService = TestBed.get(OutwardCashLetterDetailsInquiryService);
    expect(service).toBeTruthy();
  });
});
