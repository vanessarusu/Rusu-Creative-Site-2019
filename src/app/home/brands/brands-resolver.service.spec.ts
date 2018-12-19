import { TestBed, inject } from '@angular/core/testing';

import { BrandsResolverService } from './brands-resolver.service';

describe('BrandsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrandsResolverService]
    });
  });

  it('should be created', inject([BrandsResolverService], (service: BrandsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
