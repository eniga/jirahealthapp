import { TestBed, inject } from '@angular/core/testing';

import { CentresService } from './centres.service';

describe('CentresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CentresService]
    });
  });

  it('should be created', inject([CentresService], (service: CentresService) => {
    expect(service).toBeTruthy();
  }));
});
