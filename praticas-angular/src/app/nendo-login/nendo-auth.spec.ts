import { TestBed } from '@angular/core/testing';

import { NendoAuth } from './nendo-auth';

describe('NendoAuth', () => {
  let service: NendoAuth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NendoAuth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
