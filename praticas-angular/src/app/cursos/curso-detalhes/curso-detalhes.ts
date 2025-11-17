import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CursosServico } from '../cursos-servico';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-curso-detalhes',
  standalone: false,
  templateUrl: './curso-detalhes.html',
  styleUrl: './curso-detalhes.css',
})
export class CursoDetalhes {
  idCurso!:number
  inscricao!:Subscription
  curso!:any

  constructor(private cursosServico:CursosServico, private rotas:ActivatedRoute, private router:Router){}
   ngOnInit(){
    this.inscricao = this.rotas.params.subscribe(
      (param:any)=>this.idCurso=param['id']
    )

    this.curso = this.cursosServico.getCurso(this.idCurso)

    if(this.curso == null){
      this.router.navigate(['cursos/naoEncontrado',this.idCurso])
    }
   }

   ngOnDestroy(){
    this.inscricao.unsubscribe()
   }
  
}
