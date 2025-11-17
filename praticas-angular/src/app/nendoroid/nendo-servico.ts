import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NendoServico {
  private nendoroids = [
    {id:1,franquia:'Uma Musume',persona:'Matikanetannhauser'},
    {id:2,franquia:'Dungeon Meshi',persona:'Marcille'},
    {id:3,franquia:'Fate/Grand Order',persona:'Jeanne Darc'}
  ]

  getNendos(){
    return this.nendoroids
  }

  getNendo(id:number){
    return this.nendoroids.find(nendo=>nendo.id == id)
  }
}
