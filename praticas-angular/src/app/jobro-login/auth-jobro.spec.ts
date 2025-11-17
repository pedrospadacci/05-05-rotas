import { TestBed } from '@angular/core/testing';

import { AuthJobro } from './auth-jobro';

describe('AuthJobro', () => {
  let service: AuthJobro;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthJobro);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
