import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardCollectionProductComponent } from './inward-collection-product.component';

describe('InwardCollectionProductComponent', () => {
  let component: InwardCollectionProductComponent;
  let fixture: ComponentFixture<InwardCollectionProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardCollectionProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardCollectionProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
