import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { JojoServicos } from './jojo-servicos';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jojo',
  standalone: false,
  templateUrl: './jojo.html',
  styleUrl: './jojo.css',
})
export class Jojo {
  jojos!:any[]
  inscricao!:Subscription
  pagina!:number

  constructor(
    private jojoServicos:JojoServicos,
    private rotas:ActivatedRoute, 
    private router:Router){}

  ngOnInit(){
    this.jojos = this.jojoServicos.getJojos()

    this.inscricao = this.rotas.queryParams.subscribe(
      (queryParam:any)=>this.pagina = queryParam['page']
    )
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }

  avancarPagina(){
    this.pagina++
    this.router.navigate(['/jojo'],{queryParams:{'page':this.pagina}})
  }

  voltarPagina(){
    if(this.pagina > 1){
      this.pagina--
      this.router.navigate(['/jojo'],{queryParams:{'page':this.pagina}})
    }
  }

  paginaInicial(){
    this.pagina = 1
    this.router.navigate(['/jojo'],{queryParams:{'page':this.pagina}})
  }
}
