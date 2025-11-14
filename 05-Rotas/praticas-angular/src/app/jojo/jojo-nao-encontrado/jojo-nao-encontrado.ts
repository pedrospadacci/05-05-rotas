import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-jojo-nao-encontrado',
  standalone: false,
  templateUrl: './jojo-nao-encontrado.html',
  styleUrl: './jojo-nao-encontrado.css',
})
export class JojoNaoEncontrado {
  idJojo!:number
  inexistente!:Subscription

  constructor(private rotas:ActivatedRoute){}

  ngOnInit(){
    this.inexistente = this.rotas.params.subscribe(
      (param:any)=>this.idJojo = param['id']
    )
    console.log(this.idJojo)
  }

  ngOnDestroy(){
    this.inexistente.unsubscribe()
    
  }
}
