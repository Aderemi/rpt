import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardCashLetterAdjustmentComponent } from './outward-cash-letter-adjustment.component';

describe('OutwardCashLetterAdjustmentComponent', () => {
  let component: OutwardCashLetterAdjustmentComponent;
  let fixture: ComponentFixture<OutwardCashLetterAdjustmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardCashLetterAdjustmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardCashLetterAdjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
