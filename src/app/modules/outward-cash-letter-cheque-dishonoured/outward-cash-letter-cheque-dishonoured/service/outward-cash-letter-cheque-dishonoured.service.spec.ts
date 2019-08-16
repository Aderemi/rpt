import { TestBed } from '@angular/core/testing';

import { OutwardCashLetterChequeDishonouredService } from './outward-cash-letter-cheque-dishonoured.service';

describe('OutwardCashLetterChequeDishonouredService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutwardCashLetterChequeDishonouredService = TestBed.get(OutwardCashLetterChequeDishonouredService);
    expect(service).toBeTruthy();
  });
});
