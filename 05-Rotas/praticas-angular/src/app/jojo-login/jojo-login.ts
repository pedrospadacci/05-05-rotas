import { Component } from '@angular/core';
import { Jozuario } from './jozuario';
import { AuthJojo } from './auth-jojo';

@Component({
  selector: 'app-jojo-login',
  standalone: false,
  templateUrl: './jojo-login.html',
  styleUrl: './jojo-login.css',
})
export class JojoLogin {
  jozuario:Jozuario = new Jozuario()

  constructor(private authJojo:AuthJojo){}

  fazerLogin(){
    this.authJojo.fazerLogin(this.jozuario)
  }
}
