import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { JobroServicos } from '../jobro-servicos';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jobro-detalhes',
  standalone: false,
  templateUrl: './jobro-detalhes.html',
  styleUrl: './jobro-detalhes.css',
})
export class JobroDetalhes {
  idJobro!:number
  jobro!:any
  inscricao!:Subscription

  constructor(
    private jobroServicos:JobroServicos,
    private rotas:ActivatedRoute,
    private router:Router
  ){}

  ngOnInit(){
    this.inscricao = this.rotas.params.subscribe(
      (param:any)=>this.idJobro = param['id']
    )
    this.jobro = this.jobroServicos.getJobro(this.idJobro)

    if(this.jobro == null){
      this.router.navigate(['/jobroNaoEncontrado',this.idJobro])
    }
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }

  editarJobro(){
    this.router.navigate(['/jobro',this.idJobro,'editar'])
  }
}
