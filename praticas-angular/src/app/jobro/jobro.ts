import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { JobroServicos } from './jobro-servicos';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jobro',
  standalone: false,
  templateUrl: './jobro.html',
  styleUrl: './jobro.css',
})
export class Jobro {
  jobros!:any[]
  inscricao!:Subscription
  pagina!:number

  constructor(
    private jobroServicos:JobroServicos,
    private rotas:ActivatedRoute,
    private router:Router){}

    ngOnInit(){
      this.jobros = this.jobroServicos.getJobros()

      this.inscricao = this.rotas.queryParams.subscribe(
        (queryParam:any)=>this.pagina = queryParam['page']
      )
    }

    ngOnDestroy(){
      this.inscricao.unsubscribe()
    }

  avancarPagina(){
    this.pagina++
    this.router.navigate(['/jobro'],{queryParams:{'page':this.pagina}})
  }

  voltarPagina(){
    if(this.pagina > 1){
      this.pagina--
      this.router.navigate(['/jobro'],{queryParams:{'page':this.pagina}})
    }
  }

  paginaInicial(){
    this.pagina = 1
    this.router.navigate(['/jobro'],{queryParams:{'page':this.pagina}})
  }
}
