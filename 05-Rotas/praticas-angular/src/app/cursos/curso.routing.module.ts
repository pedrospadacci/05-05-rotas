import { NgModule } from "@angular/core";
import { Cursos } from "./cursos";
import { RouterModule, Routes } from "@angular/router";
import { CursoDetalhes } from "./curso-detalhes/curso-detalhes";
import { CursoNaoEncontrado } from "./curso-nao-encontrado/curso-nao-encontrado";

const cursoRouting:Routes = [
    {path:'',component:Cursos},
    {path:'naoEncontrado/:id', component:CursoNaoEncontrado},
    {path:':id',component:CursoDetalhes},
    
]

@NgModule({
    imports:[RouterModule.forChild(cursoRouting)],
    exports:[RouterModule]
})

export class CursoRoutingModule{}