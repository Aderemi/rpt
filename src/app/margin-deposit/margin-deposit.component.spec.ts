import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarginDepositComponent } from './margin-deposit.component';

describe('MarginDepositComponent', () => {
  let component: MarginDepositComponent;
  let fixture: ComponentFixture<MarginDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarginDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarginDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
