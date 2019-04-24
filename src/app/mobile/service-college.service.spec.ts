import { TestBed } from '@angular/core/testing';

import { ServiceCollegeService } from './service-college.service';

describe('ServiceCollegeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceCollegeService = TestBed.get(ServiceCollegeService);
    expect(service).toBeTruthy();
  });
});
