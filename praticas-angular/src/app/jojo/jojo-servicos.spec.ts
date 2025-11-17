import { TestBed } from '@angular/core/testing';

import { JojoServicos } from './jojo-servicos';

describe('JojoServicos', () => {
  let service: JojoServicos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JojoServicos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
