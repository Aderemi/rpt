import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateruleCategorysComponent} from './updaterule-categorys.component';

describe('UpdateruleCategorysComponent', () => {
  let component: UpdateruleCategorysComponent;
  let fixture: ComponentFixture<UpdateruleCategorysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateruleCategorysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateruleCategorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
