import { TestBed, inject } from '@angular/core/testing';

import { AboutResolverService } from './about-resolver.service';

describe('AboutResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutResolverService]
    });
  });

  it('should be created', inject([AboutResolverService], (service: AboutResolverService) => {
    expect(service).toBeTruthy();
  }));
});
