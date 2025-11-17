import { TestBed } from '@angular/core/testing';

import { AuthJobroGuard } from './auth-jobro-guard';

describe('AuthJobroGuard', () => {
  let service: AuthJobroGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthJobroGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
