import { TestBed, inject } from '@angular/core/testing';

import { LoggedStatusService } from './logged-status.service';

describe('LoggedStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggedStatusService]
    });
  });

  it('should be created', inject([LoggedStatusService], (service: LoggedStatusService) => {
    expect(service).toBeTruthy();
  }));
});
