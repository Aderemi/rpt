import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardCashLetterChequeAdjustmentHomeComponent } from './outward-cash-letter-cheque-adjustment-home.component';

describe('OutwardCashLetterChequeAdjustmentHomeComponent', () => {
  let component: OutwardCashLetterChequeAdjustmentHomeComponent;
  let fixture: ComponentFixture<OutwardCashLetterChequeAdjustmentHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardCashLetterChequeAdjustmentHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardCashLetterChequeAdjustmentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
