import { TestBed } from '@angular/core/testing';

import { AuthPrat } from './auth-prat.guard';

describe('AuthPrat', () => {
  let service: AuthPrat;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthPrat);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
