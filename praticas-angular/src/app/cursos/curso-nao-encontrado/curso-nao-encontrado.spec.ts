import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoNaoEncontrado } from './curso-nao-encontrado';

describe('CursoNaoEncontrado', () => {
  let component: CursoNaoEncontrado;
  let fixture: ComponentFixture<CursoNaoEncontrado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursoNaoEncontrado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoNaoEncontrado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
