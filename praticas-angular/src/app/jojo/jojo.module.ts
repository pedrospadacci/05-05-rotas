import { NgModule } from "@angular/core";
import { JojoDetalhes } from "./jojo-detalhes/jojo-detalhes";
import { Jojo } from "./jojo";
import { JojoNaoEncontrado } from "./jojo-nao-encontrado/jojo-nao-encontrado";
import { CommonModule } from "@angular/common";
import { JojoServicos } from "./jojo-servicos";
import { JojoRoutingModule } from "./jojo.routing.module";
import { FormsModule } from "@angular/forms";
import { JojoForms } from "./jojo-forms/jojo-forms";


@NgModule({
    declarations:
    [
        Jojo,
        JojoDetalhes,
        JojoNaoEncontrado,
        JojoForms
    ],
    imports:
    [
        CommonModule,
        JojoRoutingModule,
        FormsModule
    ],
    exports:
    [

    ],
    providers:
    [
        JojoServicos
    ]
})

export class JojoModule{}