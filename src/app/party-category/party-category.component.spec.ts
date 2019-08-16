import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyCategoryComponent } from './party-category.component';

describe('PartyCategoryComponent', () => {
  let component: PartyCategoryComponent;
  let fixture: ComponentFixture<PartyCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
