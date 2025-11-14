import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CursosServico } from './cursos-servico';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  standalone: false,
  templateUrl: './cursos.html',
  styleUrl: './cursos.css',
})
export class Cursos {
  cursos!:any[]
  inscricao!:Subscription
  pagina!:number

  constructor(private cursosServico:CursosServico, private rotas:ActivatedRoute, private router:Router){}

  ngOnInit(){
    this.cursos = this.cursosServico.getCursos()

    this.inscricao = this.rotas.queryParams.subscribe(
      (queryParam:any)=>this.pagina = queryParam['page']
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }

  voltarPagina(){
    if(this.pagina > 1){
      this.pagina--
      this.router.navigate(['/cursos'],{queryParams:{'page':this.pagina}})
    }
  }

  inicioPagina(){
    this.pagina = 1
    this.router.navigate(['/cursos'],{queryParams:{'page':this.pagina}})
  }

  avancarPagina(){
    this.pagina++
    this.router.navigate(['/cursos'],{queryParams:{'page':this.pagina}})
  }
}
