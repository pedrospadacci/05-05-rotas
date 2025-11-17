import { Component } from '@angular/core';

import { Auth } from './auth';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  usuario:Usuario = new Usuario()

  constructor(private authServico:Auth, private router:Router){}

  ngOnInit(){
    if(this.authServico.usuarioAutenticado){
      this.router.navigate(['/autenticado'])
    }
  }

  fazerLogin(){
    this.authServico.fazerLogin(this.usuario)
  }
}
