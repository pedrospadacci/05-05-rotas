import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoDetalhes } from './curso-detalhes/curso-detalhes';
import { CursoNaoEncontrado } from './curso-nao-encontrado/curso-nao-encontrado';
import { CursoRoutingModule } from './curso.routing.module';
import { Cursos } from './cursos';



@NgModule({
  declarations: [
    Cursos,
    CursoDetalhes,
    CursoNaoEncontrado
  ],
  imports: [
    CommonModule,
    CursoRoutingModule
  ]
})
export class CursosModule { }
