import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNendoNaoEncontrada } from './pagina-nendo-nao-encontrada';

describe('PaginaNendoNaoEncontrada', () => {
  let component: PaginaNendoNaoEncontrada;
  let fixture: ComponentFixture<PaginaNendoNaoEncontrada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaNendoNaoEncontrada]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaNendoNaoEncontrada);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
