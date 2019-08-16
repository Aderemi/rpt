import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRateTypesComponent } from './exchange-rate-types.component';

describe('ExchangeRateTypesComponent', () => {
  let component: ExchangeRateTypesComponent;
  let fixture: ComponentFixture<ExchangeRateTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeRateTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRateTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
