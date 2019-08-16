import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuaranteeReceivedProductComponent } from './guarantee-received-product.component';

describe('GuaranteeReceivedProductComponent', () => {
  let component: GuaranteeReceivedProductComponent;
  let fixture: ComponentFixture<GuaranteeReceivedProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuaranteeReceivedProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuaranteeReceivedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
