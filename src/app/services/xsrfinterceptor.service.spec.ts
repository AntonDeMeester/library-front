import { TestBed } from '@angular/core/testing';

import { XsrfinterceptorService } from './xsrfinterceptor.service';

describe('XsrfinterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XsrfinterceptorService = TestBed.get(XsrfinterceptorService);
    expect(service).toBeTruthy();
  });
});
