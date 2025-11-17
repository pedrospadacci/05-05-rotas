import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Nendoroids } from "./nendoroids";
import { NendoDetalhe } from "./nendo-detalhe/nendo-detalhe";
import { NendoForm } from "./nendo-form/nendo-form";
import { NendoroidDetalheResolver } from "./guard/nendoroid-detalhe.resolver";
import { NendoDeactivate } from "../guard/nendo-deactivate.guard";

const nendoRotas:Routes = [
    {path:'',component:Nendoroids,children:[
        {path:'novo', component:NendoForm},
        {path:':id', component:NendoDetalhe, resolve:{nendo:NendoroidDetalheResolver}},
        {path:':id/editar',component:NendoForm, canDeactivate:[NendoDeactivate]}
    ]}
]

@NgModule({
    imports:[RouterModule.forChild(nendoRotas)],
    exports:[RouterModule]
})

export class NendoRoutingModule{}