import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRateTypeComponent } from './exchange-rate-type.component';

describe('ExchangeRateTypeComponent', () => {
  let component: ExchangeRateTypeComponent;
  let fixture: ComponentFixture<ExchangeRateTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeRateTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRateTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
