import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app.routing';
import { Login } from './login/login';
import { HomeComponent } from './home/home';
import { JojoLogin } from './jojo-login/jojo-login';
import { AuthPrat } from './guard/auth-prat.guard';
import { NendoLogin } from './nendo-login/nendo-login';
import { CursosGuard } from './guard/cursos.guard';
import { Autenticado } from './autenticado/autenticado';
import { AlunosGuard } from './guard/alunos.guard';
import { PaginaNaoEncontrada } from './pagina-nao-encontrada/pagina-nao-encontrada';
import { PaginaNendoNaoEncontrada } from './pagina-nendo-nao-encontrada/pagina-nendo-nao-encontrada';
import { PaginaJojoNaoEncontrado } from './pagina-jojo-nao-encontrado/pagina-jojo-nao-encontrado';
import { JobroLogin } from './jobro-login/jobro-login';



@NgModule({
  declarations: [
    App,
    Login,
    HomeComponent,
    JojoLogin,
    NendoLogin,
    Autenticado,
    PaginaNaoEncontrada,
    PaginaNendoNaoEncontrada,
    PaginaJojoNaoEncontrado,
    JobroLogin,

   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //JojoModule,
    //JobroModule,
    //RouterModule,
    AppRoutingModule,
    //AlunoModule,
    //CursosModule
    
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    AuthPrat,
    CursosGuard,
    AlunosGuard
  ],
  bootstrap: [App]
})
export class AppModule { }
