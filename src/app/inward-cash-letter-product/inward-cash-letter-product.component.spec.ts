import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardCashLetterProductComponent } from './inward-cash-letter-product.component';

describe('InwardCashLetterProductComponent', () => {
  let component: InwardCashLetterProductComponent;
  let fixture: ComponentFixture<InwardCashLetterProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardCashLetterProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardCashLetterProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
