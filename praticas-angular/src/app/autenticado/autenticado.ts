import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../login/auth';

@Component({
  selector: 'app-autenticado',
  standalone: false,
  templateUrl: './autenticado.html',
  styleUrl: './autenticado.css',
})
export class Autenticado {

  constructor(private router:Router, private authServico:Auth){}

  fazerLogout(){
    if(this.authServico.usuarioAutenticado){
      this.authServico.usuarioAutenticado = !this.authServico.usuarioAutenticado
      this.authServico.mostrarMenuEmmiter.emit(false)
      this.router.navigate(['login'])
    }
  }
}
