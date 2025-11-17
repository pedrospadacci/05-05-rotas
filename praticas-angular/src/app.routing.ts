import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './app/login/login';
import { HomeComponent as HomeComponent } from './app/home/home';
import { AuthGuard } from './app/guard/auth.guard';

import { Jojo } from './app/jojo/jojo';
import { Jobro } from './app/jobro/jobro';
import { JobroModule } from './app/jobro/jobro.module';
import { JojoLogin } from './app/jojo-login/jojo-login';
import { AuthPrat } from './app/guard/auth-prat.guard';
import { NendoLogin } from './app/nendo-login/nendo-login';
import { AuthNendoGuard } from './app/guard/auth-nendo.guard';
import { CursosGuard } from './app/guard/cursos.guard';
import { Autenticado } from './app/autenticado/autenticado';
import { AlunosGuard } from './app/guard/alunos.guard';
import { PaginaNaoEncontrada } from './app/pagina-nao-encontrada/pagina-nao-encontrada';
import { NendoAuth } from './app/nendo-login/nendo-auth';
import { NendosGuard } from './app/guard/nendos.guard';
import { PaginaNendoNaoEncontrada } from './app/pagina-nendo-nao-encontrada/pagina-nendo-nao-encontrada';
import { PaginaJojoNaoEncontrado } from './app/pagina-jojo-nao-encontrado/pagina-jojo-nao-encontrado';
import { AuthJojoGuard } from './app/guard/auth-jojo-guard';
import { JojosGuards } from './app/guard/jojos.guard';
import { JobroLogin } from './app/jobro-login/jobro-login';

//import { CursosModule } from './app/cursos/cursos-module';

const routes: Routes = [
  {path:'cursos',loadChildren: ()=> import('./app/cursos/cursos-module').then(m=>m.CursosModule),
   //canActivate:[AuthGuard],
   //canActivateChild:[CursosGuard],
   //canMatch:[AuthGuard]
  },
  {path: 'jojo', loadChildren: ()=> import('./app/jojo/jojo.module').then(m=>m.JojoModule),
    canActivate:[AuthJojoGuard],
    canActivateChild:[JojosGuards],
    canMatch:[AuthJojoGuard]
   },
  {path: 'jobro', loadChildren: ()=> import('./app/jobro/jobro.module').then(m=>m.JobroModule),
    //canActivate:[AuthGuard]
   },
  {path:'aluno',loadChildren: ()=> import('./app/aluno/aluno-module').then(m=>m.AlunoModule),
   //canActivate:[AuthGuard],
   //canActivateChild:[AlunosGuard],
   //canMatch:[AuthGuard]
  },
  {path:'nendo', loadChildren: ()=> import('./app/nendoroid/nendoroid-module').then(m=>m.NendoroidModule),
    //canActivate:[AuthNendoGuard],
    //canActivateChild:[NendosGuard],
    //canMatch:[AuthNendoGuard]
  },
  //{path:'login',component:Login},
  
  //{path:'jojoLogin',component:JojoLogin},
  {path:'jobroLogin',component:JobroLogin},
  //{path:'nendoLogin',component:NendoLogin},
  
  {path:'autenticado', component:Autenticado},
  //{path:'**',component:PaginaNaoEncontrada,
     //canActivate: [AuthGuard]
  //},

  {path:'home',component:HomeComponent,
    //canActivate:[AuthNendoGuard],
    canActivate:[AuthJojoGuard]
  }, 
  { path:'', redirectTo:'/home', pathMatch:'full' },
  //{path:'**', component:PaginaNendoNaoEncontrada},
  {path:'**', component:PaginaJojoNaoEncontrado}

];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}