import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobroServicos {
  private jobros = [
    {
      id:1,
      nome:'William Zepelli',
      parte:'Phantom Blood'
    },
    {
      id:2,
      nome:'Ceasar Zepelli',
      parte:'Battle Tendency'
    },
    {
      id:3,
      nome:'Kakyoin Noriaki',
      parte:'Stardust Crusaders'
    },
    {
      id:4,
      nome:'Okuyazu Nijimura',
      parte:'Diamond is Unbreakable'
    },
    {
      id:5,
      nome:'Bruno Bucciarati',
      parte:'Vento Aureo'
    },
    {
      id:6,
      nome:'Hermes Costello',
      parte:'Stone Ocean'
    },
    {
      id:7,
      nome:'Gyro Zepelli',
      parte:'Steel Ball Run'
    },
    {
      id:8,
      nome:'Yasuho Hirose',
      parte:'Jojolion'
    },
    {
      id:9,
      nome:'Dragona Joestar',
      parte:'Jojolands'
    },
  ]

  getJobros(){
    return this.jobros
  }

  getJobro(id:number){
    return this.jobros.find(jobro=>jobro.id == id)
  }
}
