import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardBankChequeCancellationComponent } from './outward-bank-cheque-cancellation.component';

describe('OutwardBankChequeCancellationComponent', () => {
  let component: OutwardBankChequeCancellationComponent;
  let fixture: ComponentFixture<OutwardBankChequeCancellationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardBankChequeCancellationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardBankChequeCancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
