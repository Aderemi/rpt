import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignExchangeDealsComponent } from './foreign-exchange-deals.component';

describe('ForeignExchangeDealsComponent', () => {
  let component: ForeignExchangeDealsComponent;
  let fixture: ComponentFixture<ForeignExchangeDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeignExchangeDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeignExchangeDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
