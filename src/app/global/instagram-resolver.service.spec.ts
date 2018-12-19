import { TestBed, inject } from '@angular/core/testing';

import { InstagramResolverService } from './instagram-resolver.service';

describe('InstagramResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstagramResolverService]
    });
  });

  it('should be created', inject([InstagramResolverService], (service: InstagramResolverService) => {
    expect(service).toBeTruthy();
  }));
});
