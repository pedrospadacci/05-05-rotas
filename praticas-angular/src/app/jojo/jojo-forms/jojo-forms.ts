import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { JojoServicos } from '../jojo-servicos';
import { ActivatedRoute } from '@angular/router';
import { IFormJojoCanDeactivate } from '../../guard/iform-jojo-candeactivate';

@Component({
  selector: 'app-jojo-forms',
  standalone: false,
  templateUrl: './jojo-forms.html',
  styleUrl: './jojo-forms.css',
})
export class JojoForms{
  idJojo!:number
  jojo!:any
  inscricao!:Subscription
  formMudou:boolean = false

  constructor(private jojoServicos:JojoServicos, private rotas:ActivatedRoute){}

  ngOnInit(){
    this.inscricao = this.rotas.params.subscribe(
      (param:any)=>this.idJojo = param['id']
    )

    this.jojo = this.jojoServicos.getJojo(this.idJojo)

    if(this.jojo == null){
      this.jojo = {}
    }
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }

  aoDigitar(){
    this.formMudou = true
    console.log('Mudou')
  }

  podeMudar(){
    if(this.formMudou){
      return confirm('Deseja sair do formulário?')
    }
    return true
  }

  podeDesativarJojo(){
    return this.podeMudar()
  }
}
