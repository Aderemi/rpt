import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardCashLetterCreditAdvicedHomeComponent } from './outward-cash-letter-credit-adviced-home.component';

describe('OutwardCashLetterCreditAdvicedHomeComponent', () => {
  let component: OutwardCashLetterCreditAdvicedHomeComponent;
  let fixture: ComponentFixture<OutwardCashLetterCreditAdvicedHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardCashLetterCreditAdvicedHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardCashLetterCreditAdvicedHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
