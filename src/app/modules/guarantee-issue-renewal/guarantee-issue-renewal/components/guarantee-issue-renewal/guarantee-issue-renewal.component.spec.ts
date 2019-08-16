import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuaranteeIssueRenewalComponent } from './guarantee-issue-renewal.component';

describe('GuaranteeIssueRenewalComponent', () => {
  let component: GuaranteeIssueRenewalComponent;
  let fixture: ComponentFixture<GuaranteeIssueRenewalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuaranteeIssueRenewalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuaranteeIssueRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
