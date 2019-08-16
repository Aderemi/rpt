import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardBankChequeCancellationHomeComponent } from './outward-bank-cheque-cancellation-home.component';

describe('OutwardBankChequeCancellationHomeComponent', () => {
  let component: OutwardBankChequeCancellationHomeComponent;
  let fixture: ComponentFixture<OutwardBankChequeCancellationHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardBankChequeCancellationHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardBankChequeCancellationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
