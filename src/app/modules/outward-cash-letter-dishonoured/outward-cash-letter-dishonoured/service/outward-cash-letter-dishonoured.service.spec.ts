import { TestBed } from '@angular/core/testing';

import { OutwardCashLetterDishonouredService } from './outward-cash-letter-dishonoured.service';

describe('OutwardCashLetterDishonouredService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutwardCashLetterDishonouredService = TestBed.get(OutwardCashLetterDishonouredService);
    expect(service).toBeTruthy();
  });
});
