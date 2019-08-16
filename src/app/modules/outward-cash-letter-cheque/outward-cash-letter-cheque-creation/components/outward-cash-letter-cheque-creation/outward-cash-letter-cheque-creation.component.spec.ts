import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardCashLetterChequeCreationComponent } from './outward-cash-letter-cheque-creation.component';

describe('OutwardCashLetterChequeCreationComponent', () => {
  let component: OutwardCashLetterChequeCreationComponent;
  let fixture: ComponentFixture<OutwardCashLetterChequeCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardCashLetterChequeCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardCashLetterChequeCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
