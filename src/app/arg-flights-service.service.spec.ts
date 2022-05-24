import { TestBed } from '@angular/core/testing';

import { ArgFlightsServiceService } from './arg-flights-service.service';

describe('ArgFlightsServiceService', () => {
  let service: ArgFlightsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArgFlightsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
