import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardCashLetterChequeDishonouredHomeComponent } from './outward-cash-letter-cheque-dishonoured-home.component';

describe('OutwardCashLetterChequeDishonouredHomeComponent', () => {
  let component: OutwardCashLetterChequeDishonouredHomeComponent;
  let fixture: ComponentFixture<OutwardCashLetterChequeDishonouredHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardCashLetterChequeDishonouredHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardCashLetterChequeDishonouredHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
