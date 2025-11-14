import { TestBed } from '@angular/core/testing';

import { AuthNendoGuard } from './auth-nendo.guard';

describe('AuthNendo', () => {
  let service: AuthNendoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthNendoGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
