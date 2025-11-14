import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-jobro-nao-encontrado',
  standalone: false,
  templateUrl: './jobro-nao-encontrado.html',
  styleUrl: './jobro-nao-encontrado.css',
})
export class JobroNaoEncontrado {
  idJobro!:number
  inexistente!:Subscription

  constructor(private rotas:ActivatedRoute){}

  ngOnInit(){
    this.inexistente = this.rotas.params.subscribe(
      (param:any)=>this.idJobro = param['id']
    )
  }

  ngOnDestroy(){
    this.inexistente.unsubscribe
  }
}
