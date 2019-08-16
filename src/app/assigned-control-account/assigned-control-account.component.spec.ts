import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedControlAccountComponent } from './assigned-control-account.component';

describe('AssignedControlAccountComponent', () => {
  let component: AssignedControlAccountComponent;
  let fixture: ComponentFixture<AssignedControlAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedControlAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedControlAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
