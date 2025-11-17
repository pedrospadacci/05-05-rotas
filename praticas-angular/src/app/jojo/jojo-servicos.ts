import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JojoServicos {
  private jojos = [
    {
      id:1,
      nome:'Johnathan Joestar',
      parte:'Phantom Blood'
    },
    {
      id:2,
      nome:'Joseph Joestar',
      parte:'Battle Tendency'
    },
    {
      id:3,
      nome:'Jotaro Kujo',
      parte:'Stardust Crusaders'
    },
    {
      id:4,
      nome:'Josuke Higashikata',
      parte:'Diamond is Unbreakable'
    },
    {
      id:5,
      nome:'Giorno Giovanna',
      parte:'Vento Aureo'
    },
    {
      id:6,
      nome:'Jolyne Kujo',
      parte:'Stone Ocean'
    },
    {
      id:7,
      nome:'Johnny Joestar',
      parte:'Steel Ball Run'
    },
    {
      id:8,
      nome:'Josuke Higashikata (Josefumi Kujo)',
      parte:'Jojolion'
    },
    {
      id:9,
      nome:'Jodio Joestar',
      parte:'Jojolands'
    },
  ]

  getJojos(){
    return this.jojos
  }

  getJojo(id:number){
    return this.jojos.find(jojo=>jojo.id == id)
  }
}
