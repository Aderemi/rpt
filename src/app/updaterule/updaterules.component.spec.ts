import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterulesComponent } from './updaterules.component';

describe('UpdateRulesComponent', () => {
  let component: UpdaterulesComponent;
  let fixture: ComponentFixture<UpdaterulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdaterulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdaterulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
