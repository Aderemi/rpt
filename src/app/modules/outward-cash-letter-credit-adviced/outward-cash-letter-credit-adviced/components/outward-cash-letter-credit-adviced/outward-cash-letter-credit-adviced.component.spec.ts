import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardCashLetterCreditAdvicedComponent } from './outward-cash-letter-credit-adviced.component';

describe('OutwardCashLetterCreditAdvicedComponent', () => {
  let component: OutwardCashLetterCreditAdvicedComponent;
  let fixture: ComponentFixture<OutwardCashLetterCreditAdvicedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardCashLetterCreditAdvicedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardCashLetterCreditAdvicedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
