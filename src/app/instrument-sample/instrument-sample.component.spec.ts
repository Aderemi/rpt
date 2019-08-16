import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentSampleComponent } from './instrument-sample.component';

describe('InstrumentSampleComponent', () => {
  let component: InstrumentSampleComponent;
  let fixture: ComponentFixture<InstrumentSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
