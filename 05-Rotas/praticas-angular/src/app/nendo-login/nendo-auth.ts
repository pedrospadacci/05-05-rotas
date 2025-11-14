import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NendoUsuario } from './nendo-usuario';

@Injectable({
  providedIn: 'root',
})
export class NendoAuth {
  autenticado:boolean = false
  emissorNendo = new EventEmitter<boolean>

  constructor(private router:Router){}

  fazerLogin(nendoUsuario:NendoUsuario){
    if(nendoUsuario.email === 'nendo@email.com' &&
      nendoUsuario.senha === '123'
    ){
      this.emissorNendo.emit(true)
      this.router.navigate([''])
      this.autenticado = true
    }else{
      this.emissorNendo.emit(false)
      this.router.navigate(['/nendoLogin'])
      this.autenticado = false
    }
  }
}
