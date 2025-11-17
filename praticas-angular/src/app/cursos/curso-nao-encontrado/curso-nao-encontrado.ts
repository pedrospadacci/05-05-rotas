import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-nao-encontrado',
  standalone: false,
  templateUrl: './curso-nao-encontrado.html',
  styleUrl: './curso-nao-encontrado.css',
})
export class CursoNaoEncontrado {
  idCurso!:number
  inexistente!:Subscription

  constructor(private rota:ActivatedRoute){}

  ngOnInit(){
    this.inexistente = this.rota.params.subscribe(
      (param:any)=> this.idCurso = param['id']
    )
  }

  ngOnDestroy(){
    this.inexistente.unsubscribe()
  }
}
