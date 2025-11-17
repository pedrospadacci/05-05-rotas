import { TestBed } from '@angular/core/testing';

import { NendoServico } from './nendo-servico';

describe('NendoServico', () => {
  let service: NendoServico;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NendoServico);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
