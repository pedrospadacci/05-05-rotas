import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaJojoNaoEncontrado } from './pagina-jojo-nao-encontrado';

describe('PaginaJojoNaoEncontrado', () => {
  let component: PaginaJojoNaoEncontrado;
  let fixture: ComponentFixture<PaginaJojoNaoEncontrado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaJojoNaoEncontrado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaJojoNaoEncontrado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
