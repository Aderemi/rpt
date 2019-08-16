import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardCashLetterDishonouredComponent } from './outward-cash-letter-dishonoured.component';

describe('OutwardCashLetterDishonouredComponent', () => {
  let component: OutwardCashLetterDishonouredComponent;
  let fixture: ComponentFixture<OutwardCashLetterDishonouredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardCashLetterDishonouredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardCashLetterDishonouredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
