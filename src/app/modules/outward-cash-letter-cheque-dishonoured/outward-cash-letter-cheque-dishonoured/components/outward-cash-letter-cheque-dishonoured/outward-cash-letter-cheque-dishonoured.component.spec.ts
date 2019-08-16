import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardCashLetterChequeDishonouredComponent } from './outward-cash-letter-cheque-dishonoured.component';

describe('OutwardCashLetterChequeDishonouredComponent', () => {
  let component: OutwardCashLetterChequeDishonouredComponent;
  let fixture: ComponentFixture<OutwardCashLetterChequeDishonouredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardCashLetterChequeDishonouredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardCashLetterChequeDishonouredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
