import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { JojoServicos } from '../jojo-servicos';
import { ActivatedRoute, Router } from '@angular/router';
import { Jojos } from '../jojos';

@Component({
  selector: 'app-jojo-detalhes',
  standalone: false,
  templateUrl: './jojo-detalhes.html',
  styleUrl: './jojo-detalhes.css',
})
export class JojoDetalhes {
  idJojo!:number
  jojo!:Jojos
  inscricao!:Subscription

  constructor(
    private jojoServicos:JojoServicos,
    private rotas:ActivatedRoute,
    private router:Router
  ){}

  ngOnInit(){
    // this.inscricao = this.rotas.params.subscribe(
    //   (param:any)=>this.idJojo = param['id']
    // )

    // this.jojo = this.jojoServicos.getJojo(this.idJojo)

    // if(this.jojo == null){
    //   this.router.navigate(['/naoEncontrado',this.idJojo])
    // }
    this.inscricao = this.rotas.data.subscribe(
      (info)=>this.jojo = info['jojo']
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }

  editarJojo(){
    this.router.navigate(['/jojo',this.jojo.id,'editar'])
  }
}
