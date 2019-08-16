import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardCashLetterDetailsInquiryComponent } from './outward-cash-letter-details-inquiry.component';

describe('OutwardCashLetterDetailsInquiryComponent', () => {
  let component: OutwardCashLetterDetailsInquiryComponent;
  let fixture: ComponentFixture<OutwardCashLetterDetailsInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardCashLetterDetailsInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardCashLetterDetailsInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
