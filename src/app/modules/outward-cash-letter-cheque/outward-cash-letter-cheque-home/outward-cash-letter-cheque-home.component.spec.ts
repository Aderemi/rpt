import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardCashLetterChequeHomeComponent } from './outward-cash-letter-cheque-home.component';

describe('OutwardCashLetterChequeHomeComponent', () => {
  let component: OutwardCashLetterChequeHomeComponent;
  let fixture: ComponentFixture<OutwardCashLetterChequeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardCashLetterChequeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardCashLetterChequeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
