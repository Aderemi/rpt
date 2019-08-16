import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuaranteeIssueReleaseHomeComponent } from './guarantee-issue-release-home.component';

describe('GuaranteeIssueReleaseHomeComponent', () => {
  let component: GuaranteeIssueReleaseHomeComponent;
  let fixture: ComponentFixture<GuaranteeIssueReleaseHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuaranteeIssueReleaseHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuaranteeIssueReleaseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
