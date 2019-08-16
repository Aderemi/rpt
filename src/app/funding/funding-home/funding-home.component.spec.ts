import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingHomeComponent } from './funding-home.component';

describe('FundingHomeComponent', () => {
  let component: FundingHomeComponent;
  let fixture: ComponentFixture<FundingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
