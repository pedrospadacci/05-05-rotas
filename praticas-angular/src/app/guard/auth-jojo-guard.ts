import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanMatch, Route, UrlSegment } from '@angular/router';
import { AuthJojo } from './../jojo-login/auth-jojo';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthJojoGuard implements CanActivate, CanMatch{
  constructor(
    private authJojo:AuthJojo,
    private router:Router
  ){}

  private verificarAcesso(){
    if(this.authJojo.autenticado){
      return true
    }
      this.router.navigate(['/jojoLogin'])
      return false
    
  }

  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ): Observable<boolean>|boolean{
    return this.verificarAcesso()
  }

  canMatch(
    route:Route,
    segments:UrlSegment[]
  ): Observable<boolean> | boolean{
    console.log('AuthGuard Jojo CanMatch')
    return this.verificarAcesso()
  }
}
