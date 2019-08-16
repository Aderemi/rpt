import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuaranteeIssueReleaseComponent } from './guarantee-issue-release.component';

describe('GuaranteeIssueReleaseComponent', () => {
  let component: GuaranteeIssueReleaseComponent;
  let fixture: ComponentFixture<GuaranteeIssueReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuaranteeIssueReleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuaranteeIssueReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
