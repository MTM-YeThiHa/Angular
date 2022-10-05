import { TestBed } from '@angular/core/testing';

import { ProductsResolverResolver } from './products-resolver.resolver';

describe('ProductsResolverResolver', () => {
  let resolver: ProductsResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductsResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
