import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignExchangeDealComponent } from './foreign-exchange-deal.component';

describe('ForeignExchangeDealsComponent', () => {
  let component: ForeignExchangeDealComponent;
  let fixture: ComponentFixture<ForeignExchangeDealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeignExchangeDealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeignExchangeDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
