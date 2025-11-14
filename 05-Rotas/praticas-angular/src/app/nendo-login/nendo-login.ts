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

  constructor(private nendoAuth:NendoAuth){}

  fazerLogin(){
    this.nendoAuth.fazerLogin(this.nendoUsuario)
  }
}
