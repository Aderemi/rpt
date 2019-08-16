import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedFieldComponent } from './assigned-field.component';

describe('AssignedFieldComponent', () => {
  let component: AssignedFieldComponent;
  let fixture: ComponentFixture<AssignedFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
