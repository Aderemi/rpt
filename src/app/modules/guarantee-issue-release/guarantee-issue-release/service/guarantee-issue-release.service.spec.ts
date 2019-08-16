import { TestBed } from '@angular/core/testing';

import { GuaranteeIssueReleaseService } from './guarantee-issue-release.service';

describe('GuaranteeIssueReleaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuaranteeIssueReleaseService = TestBed.get(GuaranteeIssueReleaseService);
    expect(service).toBeTruthy();
  });
});
