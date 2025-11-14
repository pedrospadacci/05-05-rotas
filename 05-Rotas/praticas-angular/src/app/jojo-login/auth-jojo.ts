import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Jozuario } from './jozuario';

@Injectable({
  providedIn: 'root',
})
export class AuthJojo {
  autenticado:boolean = false
  mostrarMenuEmisor = new EventEmitter<boolean>

  constructor(private router:Router){}
  
  fazerLogin(jozuario:Jozuario){
    if(jozuario.email === 'gappy@email.com' &&
       jozuario.senha === '123'){
        this.autenticado = true
        this.router.navigate([''])
        this.mostrarMenuEmisor.emit(true)
       }else{
        this.autenticado = false
        this.router.navigate(['/jojoLogin'])
        this.mostrarMenuEmisor.emit(false)
       }
  }
}
