import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarginDepositTypeComponent } from './margin-deposit-type.component';

describe('MarginDepositTypeComponent', () => {
  let component: MarginDepositTypeComponent;
  let fixture: ComponentFixture<MarginDepositTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarginDepositTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarginDepositTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
