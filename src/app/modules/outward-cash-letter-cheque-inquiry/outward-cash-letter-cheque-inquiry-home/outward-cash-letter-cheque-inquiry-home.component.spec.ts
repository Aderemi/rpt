import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardCashLetterChequeInquiryHomeComponent } from './outward-cash-letter-cheque-inquiry-home.component';

describe('OutwardCashLetterChequeInquiryHomeComponent', () => {
  let component: OutwardCashLetterChequeInquiryHomeComponent;
  let fixture: ComponentFixture<OutwardCashLetterChequeInquiryHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardCashLetterChequeInquiryHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardCashLetterChequeInquiryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
