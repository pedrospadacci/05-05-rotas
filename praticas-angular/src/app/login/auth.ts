import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {
   usuarioAutenticado:boolean = false
  mostrarMenuEmmiter = new EventEmitter<boolean>

  constructor(private router:Router){}

   fazerLogin(usuario:Usuario){
    if(usuario.nome === "usuario@email.com" &&
      usuario.senha === "1234"
    ){
      this.usuarioAutenticado = true
      this.mostrarMenuEmmiter.emit(true)
      this.router.navigate([''])

    }else{
      this.usuarioAutenticado = false
      this.mostrarMenuEmmiter.emit(false)
      this.router.navigate(['/login'])
    }
  }
}
