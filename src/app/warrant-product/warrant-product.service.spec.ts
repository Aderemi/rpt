import { TestBed, inject } from '@angular/core/testing';

import { WarrantProductService } from './warrant-product.service';

describe('WarrantProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WarrantProductService]
    });
  });

  it('should be created', inject([WarrantProductService], (service: WarrantProductService) => {
    expect(service).toBeTruthy();
  }));
});
