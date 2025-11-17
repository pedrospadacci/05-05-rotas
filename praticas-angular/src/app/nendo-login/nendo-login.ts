import { Router } from '@angular/router';
import { AuthNendoGuard } from '../guard/auth-nendo.guard';
import { NendoAuth } from './nendo-auth';
import { NendoUsuario } from './nendo-usuario';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nendo-login',
  standalone: false,
  templateUrl: './nendo-login.html',
  styleUrl: './nendo-login.css',
})
export class NendoLogin {
  nendoUsuario = new NendoUsuario()

  constructor(private nendoAuth:NendoAuth, private router:Router){}

  ngOnInit(){
    if(this.nendoAuth.autenticado){
      this.router.navigate(['/autenticado'])
    }
  }

  fazerLogin(){
    this.nendoAuth.fazerLogin(this.nendoUsuario)
  }
}
