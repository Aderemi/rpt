import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardCashLetterDishonouredHomeComponent } from './outward-cash-letter-dishonoured-home.component';

describe('OutwardCashLetterDishonouredHomeComponent', () => {
  let component: OutwardCashLetterDishonouredHomeComponent;
  let fixture: ComponentFixture<OutwardCashLetterDishonouredHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardCashLetterDishonouredHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardCashLetterDishonouredHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
