import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateruleCategoryComponent } from './updaterule-category.component';

describe('UpdateruleCategoryComponent', () => {
  let component: UpdateruleCategoryComponent;
  let fixture: ComponentFixture<UpdateruleCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateruleCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateruleCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
