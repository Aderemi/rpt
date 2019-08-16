import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObpCurrencyComponent } from './obp-currency.component';

describe('ObpCurrencyComponent', () => {
  let component: ObpCurrencyComponent;
  let fixture: ComponentFixture<ObpCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObpCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObpCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
