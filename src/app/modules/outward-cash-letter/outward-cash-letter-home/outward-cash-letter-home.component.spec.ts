import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardCashLetterHomeComponent } from './outward-cash-letter-home.component';

describe('OutwardCashLetterHomeComponent', () => {
  let component: OutwardCashLetterHomeComponent;
  let fixture: ComponentFixture<OutwardCashLetterHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardCashLetterHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardCashLetterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
