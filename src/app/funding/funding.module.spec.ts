import { FundingModule } from './funding.module';

describe('FundingModule', () => {
  let fundingModule: FundingModule;

  beforeEach(() => {
    fundingModule = new FundingModule();
  });

  it('should create an instance', () => {
    expect(fundingModule).toBeTruthy();
  });
});
