import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { NendoServico } from '../nendo-servico';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nendo-form',
  standalone: false,
  templateUrl: './nendo-form.html',
  styleUrl: './nendo-form.css',
})
export class NendoForm {
  idNendo!:number
  nendo!:any
  inscricao!:Subscription
  mudouNendoValor:boolean = false

  constructor(private nendoServico:NendoServico, private rota:ActivatedRoute){}

  ngOnInit() {
    this.inscricao = this.rota.params.subscribe(
      (param:any)=>this.idNendo = param['id']
    )

    this.nendo = this.nendoServico.getNendo(this.idNendo)

    if(this.nendo == null){
      this.nendo = {}
    }
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }

  aoTeclarNendo(){
    this.mudouNendoValor = true
    console.log('Mudou valor nendoroid')
  }

  podeMudarNendo(){
    if(this.mudouNendoValor){
      return confirm('Deseja mudar de rota-nendo')
    }
    return true
  }

  podeDesativarNendo(){
    return this.podeMudarNendo()
  }
}