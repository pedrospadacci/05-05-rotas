import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NendoDetalhe } from './nendo-detalhe/nendo-detalhe';
import { NendoForm } from './nendo-form/nendo-form';
import { Nendoroids } from './nendoroids';
import { NendoRoutingModule } from './nendo.routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Nendoroids,
    NendoDetalhe,
    NendoForm
  ],
  imports: [
    CommonModule,
    NendoRoutingModule,
    FormsModule
  ]
})
export class NendoroidModule { }
