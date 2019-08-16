import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedSectionComponent } from './assigned-section.component';

describe('AssignedSectionComponent', () => {
  let component: AssignedSectionComponent;
  let fixture: ComponentFixture<AssignedSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
