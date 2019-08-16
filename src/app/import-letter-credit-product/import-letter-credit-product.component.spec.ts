import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportLetterCreditProductComponent } from './import-letter-credit-product.component';

describe('ImportLetterCreditProductComponent', () => {
  let component: ImportLetterCreditProductComponent;
  let fixture: ComponentFixture<ImportLetterCreditProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportLetterCreditProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportLetterCreditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
