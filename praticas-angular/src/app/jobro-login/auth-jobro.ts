import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JobroZuario } from './jobrozuario';

@Injectable({
  providedIn: 'root',
})
export class AuthJobro {
  autenticado:boolean = false
  mostrarMenuJobroEmissor = new EventEmitter<boolean>

  constructor(private router:Router){}

  fazerLogin(jobroZuario:JobroZuario){
    if(jobroZuario.email === 'purin@email.com'&&
      jobroZuario.senha === '456'){
        this.autenticado = true
        this.mostrarMenuJobroEmissor.emit(true)
        this.router.navigate([''])
      }else{
        this.mostrarMenuJobroEmissor.emit(false)
        this.router.navigate(['/jobroLogin'])
      }
    
  }

  
}
