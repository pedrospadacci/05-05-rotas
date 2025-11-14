import { Component } from '@angular/core';
import { AlunoService } from './aluno-service';
import { Subscription } from 'rxjs';
import { Aluno } from './alunos';

@Component({
  selector: 'app-aluno',
  standalone: false,
  templateUrl: './aluno.html',
  styleUrl: './aluno.css',
})
export class Alunos {
  alunos!:Aluno[]
  inscricao!:Subscription

  constructor(private alunoServico:AlunoService){}

  ngOnInit(){
    this.alunos = this.alunoServico.getAlunos()
  }
}
