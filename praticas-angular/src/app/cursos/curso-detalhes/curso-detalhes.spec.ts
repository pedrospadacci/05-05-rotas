import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDetalhes } from './curso-detalhes';

describe('CursoDetalhes', () => {
  let component: CursoDetalhes;
  let fixture: ComponentFixture<CursoDetalhes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursoDetalhes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoDetalhes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
