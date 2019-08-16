import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardCashLetterChequeAdjustmentComponent } from './outward-cash-letter-cheque-adjustment.component';

describe('OutwardCashLetterChequeAdjustmentComponent', () => {
  let component: OutwardCashLetterChequeAdjustmentComponent;
  let fixture: ComponentFixture<OutwardCashLetterChequeAdjustmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardCashLetterChequeAdjustmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardCashLetterChequeAdjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
