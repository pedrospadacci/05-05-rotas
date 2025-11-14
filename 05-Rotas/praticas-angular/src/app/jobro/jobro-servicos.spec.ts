import { TestBed } from '@angular/core/testing';

import { JobroServicos } from './jobro-servicos';

describe('JobroServicos', () => {
  let service: JobroServicos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobroServicos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
