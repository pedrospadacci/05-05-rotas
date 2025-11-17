import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NendoServico } from '../nendo-servico';
import { Nendoroid } from '../nendoroid';

@Component({
  selector: 'app-nendo-detalhe',
  standalone: false,
  templateUrl: './nendo-detalhe.html',
  styleUrl: './nendo-detalhe.css',
})
export class NendoDetalhe {
  nendo!:Nendoroid
  inscricao!:Subscription
  idNendo!:number

  constructor(private rota:ActivatedRoute, private nendoServico:NendoServico, private router:Router){}

  ngOnInit(){
    // this.inscricao = this.rota.params.subscribe(
    //   (param:any)=> this.idNendo = param['id']
    // )

    // this.nendo = this.nendoServico.getNendo(this.idNendo)
    this.inscricao = this.rota.data.subscribe(
      (info)=>this.nendo = info['nendo'] 
    )
    console.log(this.idNendo)
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }

  editarNendo(){
    this.router.navigate(['/nendo',this.nendo.id,'editar'])
  }
}
