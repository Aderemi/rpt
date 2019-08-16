import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentprocessingComponent } from './instrumentprocessing.component';

describe('InstrumentprocessingComponent', () => {
  let component: InstrumentprocessingComponent;
  let fixture: ComponentFixture<InstrumentprocessingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentprocessingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentprocessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
