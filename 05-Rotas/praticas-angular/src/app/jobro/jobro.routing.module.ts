import { NgModule } from "@angular/core";
import { JobroDetalhes } from './jobro-detalhes/jobro-detalhes';
import { RouterModule, Routes } from "@angular/router";
import { Jobro } from "./jobro";
import { JobroNaoEncontrado } from './jobro-nao-encontrado/jobro-nao-encontrado';
import { JobroForms } from "./jobro-forms/jobro-forms";



const jobroRouting:Routes = [
    {path:'',component:Jobro, children:[
        {path:':id/editar',component:JobroForms},
        {path:':id',component:JobroDetalhes},
        {path:'jobroNaoEncontrado/:id',component:JobroNaoEncontrado},
    ]}, 
]

@NgModule({
    imports:[RouterModule.forChild(jobroRouting)],
    declarations:[],
    exports:[RouterModule]
})

export class JobroRoutingModule{}