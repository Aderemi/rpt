import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyCategoriesComponent } from './party-categories.component';

describe('PartyCategoriesComponent', () => {
  let component: PartyCategoriesComponent;
  let fixture: ComponentFixture<PartyCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
