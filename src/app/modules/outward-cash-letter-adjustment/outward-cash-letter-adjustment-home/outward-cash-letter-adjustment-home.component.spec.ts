import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardCashLetterAdjustmentHomeComponent } from './outward-cash-letter-adjustment-home.component';

describe('OutwardCashLetterAdjustmentHomeComponent', () => {
  let component: OutwardCashLetterAdjustmentHomeComponent;
  let fixture: ComponentFixture<OutwardCashLetterAdjustmentHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardCashLetterAdjustmentHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardCashLetterAdjustmentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
