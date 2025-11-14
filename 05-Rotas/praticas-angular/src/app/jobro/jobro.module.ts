import { NgModule } from "@angular/core";
import { Jobro } from "./jobro";
import { JobroDetalhes } from "./jobro-detalhes/jobro-detalhes";
import { JobroNaoEncontrado } from "./jobro-nao-encontrado/jobro-nao-encontrado";
import { CommonModule } from "@angular/common";
import { JobroServicos } from "./jobro-servicos";
import { JobroRoutingModule } from "./jobro.routing.module";
import { JobroForms } from "./jobro-forms/jobro-forms";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:
    [
        Jobro,
        JobroDetalhes,
        JobroNaoEncontrado,
        JobroForms
    ],
    imports:
    [
        CommonModule,
        JobroRoutingModule,
        FormsModule
    ],
    exports:[],
    providers:
    [
        JobroServicos
    ]
})

export class JobroModule{}