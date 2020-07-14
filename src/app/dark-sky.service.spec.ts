import { TestBed } from '@angular/core/testing';

import { DarkSkyService } from './dark-sky.service';

describe('DarkSkyService', () => {
  let service: DarkSkyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkSkyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
