import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardCashLetterCreationComponent } from './outward-cash-letter-creation.component';

describe('OutwardCashLetterCreationComponent', () => {
  let component: OutwardCashLetterCreationComponent;
  let fixture: ComponentFixture<OutwardCashLetterCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardCashLetterCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardCashLetterCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
