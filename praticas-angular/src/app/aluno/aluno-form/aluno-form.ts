import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlunoService } from '../aluno-service';
import { ActivatedRoute } from '@angular/router';
import { IFormCandeactivate } from '../../guard/iform-candeactivate';

@Component({
  selector: 'app-aluno-form',
  standalone: false,
  templateUrl: './aluno-form.html',
  styleUrl: './aluno-form.css',
})
export class AlunoForm implements IFormCandeactivate{
  aluno!:any
  idAluno!:number
  inscricao!:Subscription
  formMudou:boolean = false

  constructor(
    private alunoServico:AlunoService,
    private rotas:ActivatedRoute
  ){}

  ngOnInit(){
    this.inscricao = this.rotas.params.subscribe(
      (param:any)=> this.idAluno = param['id']
    )

    this.aluno = this.alunoServico.getAluno(this.idAluno)

    if(this.aluno == null){
      this.aluno = {}
    }
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }

  onInput(){
    this.formMudou = true
    console.log('mudou')
  }

  podeMudar(){
    if(this.formMudou){
      return confirm('Deseja mudar de rota?')
    }
    return true
  }

  podeDesativar(){
    return this.podeMudar()
  }
}
