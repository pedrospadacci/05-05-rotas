import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alunos } from './aluno';
import { AlunoForm } from './aluno-form/aluno-form';
import { AlunoDetalhes } from './aluno-detalhes/aluno-detalhes';
import { AlunoRoutingModule } from './aluno.routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Alunos,
    AlunoForm,
    AlunoDetalhes
  ],
  imports: [
    CommonModule,
    AlunoRoutingModule,
    FormsModule
  ]
})
export class AlunoModule { }
