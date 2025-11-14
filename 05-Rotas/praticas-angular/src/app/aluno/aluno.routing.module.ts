import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { Alunos } from "./aluno";
import { AlunoDetalhes } from "./aluno-detalhes/aluno-detalhes";
import { AlunoForm } from "./aluno-form/aluno-form";
import { AlunoDeactivateGuard } from "../guard/aluno-deactivate.guard";
import { AlunoDetalheResolver } from "./guard/aluno-detalhe.resolver";

const alunoRoute:Routes = [
    {path:'',component:Alunos, children:[
        {path:'novo',component:AlunoForm},
        {path:':id',component:AlunoDetalhes, resolve:{aluno : AlunoDetalheResolver}},
        {path:':id/editar',component:AlunoForm, canDeactivate:[AlunoDeactivateGuard]},
    ]},
]

@NgModule({
    imports:[RouterModule.forChild(alunoRoute)],
    exports:[RouterModule],
    declarations:[]
})

export class AlunoRoutingModule{}