import { TestBed } from '@angular/core/testing';

import { GuaranteeIssueRenewalService } from './guarantee-issue-renewal.service';

describe('GuaranteeIssueRenewalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuaranteeIssueRenewalService = TestBed.get(GuaranteeIssueRenewalService);
    expect(service).toBeTruthy();
  });
});
