import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantProductComponent } from './warrant-product.component';

describe('WarrantProductComponent', () => {
  let component: WarrantProductComponent;
  let fixture: ComponentFixture<WarrantProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarrantProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrantProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
