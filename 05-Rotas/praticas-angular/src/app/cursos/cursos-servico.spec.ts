import { TestBed } from '@angular/core/testing';

import { CursosServico } from './cursos-servico';

describe('CursosServico', () => {
  let service: CursosServico;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursosServico);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
