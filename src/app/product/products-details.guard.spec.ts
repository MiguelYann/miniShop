import { TestBed } from '@angular/core/testing';

import { ProductsDetailsGuard } from './products-details.guard';

describe('ProductsDetailsGuard', () => {
  let guard: ProductsDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductsDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
