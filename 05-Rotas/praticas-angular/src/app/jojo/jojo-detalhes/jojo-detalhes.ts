import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { JojoServicos } from '../jojo-servicos';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jojo-detalhes',
  standalone: false,
  templateUrl: './jojo-detalhes.html',
  styleUrl: './jojo-detalhes.css',
})
export class JojoDetalhes {
  idJojo!:number
  jojo!:any
  inscricao!:Subscription

  constructor(
    private jojoServicos:JojoServicos,
    private rotas:ActivatedRoute,
    private router:Router
  ){}

  ngOnInit(){
    this.inscricao = this.rotas.params.subscribe(
      (param:any)=>this.idJojo = param['id']
    )

    this.jojo = this.jojoServicos.getJojo(this.idJojo)

    if(this.jojo == null){
      this.router.navigate(['/naoEncontrado',this.idJojo])
    }
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }

  editarJojo(){
    this.router.navigate(['/jojo',this.idJojo,'editar'])
  }
}
