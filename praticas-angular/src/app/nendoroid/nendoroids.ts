import { Component } from '@angular/core';
import { NendoServico } from './nendo-servico';
import { Nendoroid } from './nendoroid';

@Component({
  selector: 'app-nendoroid',
  standalone: false,
  templateUrl: './nendoroid.html',
  styleUrl: './nendoroid.css',
})
export class Nendoroids {
  nendoroids!:Nendoroid[]

  constructor(private nendoServico:NendoServico){}

  ngOnInit(){
    this.nendoroids = this.nendoServico.getNendos()
  }
}
