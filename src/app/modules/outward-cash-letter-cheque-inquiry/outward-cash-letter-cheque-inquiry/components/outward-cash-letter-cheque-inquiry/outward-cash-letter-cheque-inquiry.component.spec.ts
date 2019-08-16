import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardCashLetterChequeInquiryComponent } from './outward-cash-letter-cheque-inquiry.component';

describe('OutwardCashLetterChequeInquiryComponent', () => {
  let component: OutwardCashLetterChequeInquiryComponent;
  let fixture: ComponentFixture<OutwardCashLetterChequeInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardCashLetterChequeInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardCashLetterChequeInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
