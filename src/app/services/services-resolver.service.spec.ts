import { TestBed, inject } from '@angular/core/testing';

import { ServicesResolverService } from './services-resolver.service';

describe('ServicesResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicesResolverService]
    });
  });

  it('should be created', inject([ServicesResolverService], (service: ServicesResolverService) => {
    expect(service).toBeTruthy();
  }));
});
