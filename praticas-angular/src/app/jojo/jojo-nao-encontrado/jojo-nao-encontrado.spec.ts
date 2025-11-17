import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JojoNaoEncontrado } from './jojo-nao-encontrado';

describe('JojoNaoEncontrado', () => {
  let component: JojoNaoEncontrado;
  let fixture: ComponentFixture<JojoNaoEncontrado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JojoNaoEncontrado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JojoNaoEncontrado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
