import { Component, signal } from '@angular/core';
import { Auth } from './login/auth';
import { AuthJojo } from './jojo-login/auth-jojo';
import { NendoAuth } from './nendo-login/nendo-auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('praticas-angular');
  mostrarMenu:boolean = false

  constructor(
    private authServico:Auth,
    private authJojo:AuthJojo,
    private nendoAuth:NendoAuth,
    private router:Router
    ){}

    // ngOnInit(){
    //   this.authServico.mostrarMenuEmmiter.subscribe(
    //     mostrar=>this.mostrarMenu = mostrar
    // )
    //  ngOnInit(){
    //     this.nendoAuth.emissorNendo.subscribe(
    //     emitido=>this.mostrarMenu = emitido
    //   )
    //  }
    // }
     ngOnInit(){
       this.authJojo.mostrarMenuEmisor.subscribe(
         mostrar=>this.mostrarMenu = mostrar
       )
    
      }
  //  ngOnInit(){
  //    this.authServico.mostrarMenuEmmiter.subscribe(
  //      mostrar=>this.mostrarMenu = mostrar
  //   )

  //  if(this.mostrarMenu === false){
  //      this.router.navigate(['login'])
  //   }
  // }
  }
