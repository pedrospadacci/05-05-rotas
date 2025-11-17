import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { JobroServicos } from '../jobro-servicos';

@Component({
  selector: 'app-jobro-forms',
  standalone: false,
  templateUrl: './jobro-forms.html',
  styleUrl: './jobro-forms.css',
})
export class JobroForms {
  idJobro!:number
  inscricao!:Subscription
  jobro!:any

  constructor(private rota:ActivatedRoute, private jobroServicos:JobroServicos){}

  ngOnInit(){
    this.inscricao = this.rota.params.subscribe(
      (param:any)=>this.idJobro = param['id']
    )

    this.jobro = this.jobroServicos.getJobro(this.idJobro)

    if(this.jobro == null){
      this.jobro = {}
    }
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }
}
