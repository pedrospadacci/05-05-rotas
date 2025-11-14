import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Jojo } from "./jojo";
import { JojoDetalhes } from "./jojo-detalhes/jojo-detalhes";
import { JojoNaoEncontrado } from "./jojo-nao-encontrado/jojo-nao-encontrado";
import { JojoForms } from "./jojo-forms/jojo-forms";

const jojoRotas:Routes = [
    {path:'',component:Jojo, children:[
        {path:':id',component:JojoDetalhes},
        {path:':id/editar',component:JojoForms},
        {path:'naoEncontrado/:id',component:JojoNaoEncontrado},
    ]},   
]

@NgModule({
    imports:[RouterModule.forChild(jojoRotas)],
    exports:[RouterModule],
    declarations:[]
})

export class JojoRoutingModule{}