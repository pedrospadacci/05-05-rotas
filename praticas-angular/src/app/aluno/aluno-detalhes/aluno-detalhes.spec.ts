import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoDetalhes } from './aluno-detalhes';

describe('AlunoDetalhes', () => {
  let component: AlunoDetalhes;
  let fixture: ComponentFixture<AlunoDetalhes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlunoDetalhes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoDetalhes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
