import { TestBed } from '@angular/core/testing';

import { StoreserviceService } from './storeservice.service';

describe('StoreserviceService', () => {
  let service: StoreserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
