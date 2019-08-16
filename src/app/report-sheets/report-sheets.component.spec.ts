import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSheetsComponent } from './report-sheets.component';

describe('ReportSheetsComponent', () => {
  let component: ReportSheetsComponent;
  let fixture: ComponentFixture<ReportSheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
