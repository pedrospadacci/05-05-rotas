import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlunoService } from '../aluno-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../alunos';

@Component({
  selector: 'app-aluno-detalhes',
  standalone: false,
  templateUrl: './aluno-detalhes.html',
  styleUrl: './aluno-detalhes.css',
})
export class AlunoDetalhes {
  idAluno!:number
  inscricao!:Subscription
  aluno!:Aluno

  constructor(private alunoServico:AlunoService, private rota:ActivatedRoute, private router:Router){}

  ngOnInit(){
    // this.inscricao = this.rota.params.subscribe(
    //   (param:any)=>this.idAluno = param['id']
    // )
    // this.aluno = this.alunoServico.getAluno(this.idAluno)
    this.inscricao = this.rota.data.subscribe(
      (info)=>this.aluno = info['aluno']
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }

  editarContato(){
    this.router.navigate(['/aluno',this.aluno.id,'editar'])
  }
}
