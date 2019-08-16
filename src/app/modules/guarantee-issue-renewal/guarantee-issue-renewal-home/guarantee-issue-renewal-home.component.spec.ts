import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuaranteeIssueRenewalHomeComponent } from './guarantee-issue-renewal-home.component';

describe('GuaranteeIssueRenewalHomeComponent', () => {
  let component: GuaranteeIssueRenewalHomeComponent;
  let fixture: ComponentFixture<GuaranteeIssueRenewalHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuaranteeIssueRenewalHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuaranteeIssueRenewalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
