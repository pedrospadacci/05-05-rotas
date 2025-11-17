import { TestBed } from '@angular/core/testing';

import { AuthJojoGuard } from './auth-jojo-guard';

describe('AuthJojoGuard', () => {
  let service: AuthJojoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthJojoGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
