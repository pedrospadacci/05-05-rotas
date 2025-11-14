import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { JojoServicos } from '../jojo-servicos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jojo-forms',
  standalone: false,
  templateUrl: './jojo-forms.html',
  styleUrl: './jojo-forms.css',
})
export class JojoForms {
  idJojo!:number
  jojo!:any
  inscricao!:Subscription

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
}
