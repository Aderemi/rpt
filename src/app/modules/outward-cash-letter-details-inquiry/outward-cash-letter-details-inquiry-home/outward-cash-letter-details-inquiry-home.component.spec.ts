import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardCashLetterDetailsInquiryHomeComponent } from './outward-cash-letter-details-inquiry-home.component';

describe('OutwardCashLetterDetailsInquiryHomeComponent', () => {
  let component: OutwardCashLetterDetailsInquiryHomeComponent;
  let fixture: ComponentFixture<OutwardCashLetterDetailsInquiryHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardCashLetterDetailsInquiryHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardCashLetterDetailsInquiryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
