import { TestBed, inject } from '@angular/core/testing';

import { InstagramServiceService } from './instagram-service.service';

describe('InstagramServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstagramServiceService]
    });
  });

  it('should be created', inject([InstagramServiceService], (service: InstagramServiceService) => {
    expect(service).toBeTruthy();
  }));
});
