import { TestBed } from '@angular/core/testing';

import { AuthJojo } from './auth-jojo';

describe('AuthJojo', () => {
  let service: AuthJojo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthJojo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
