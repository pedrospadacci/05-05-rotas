import { AuthJojo } from './../jojo-login/auth-jojo';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthPrat implements CanActivate{
  constructor(
    private router:Router,
    private AuthJojo:AuthJojo
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
    if(this.AuthJojo.autenticado){
      return true
    }
    this.router.navigate(['/jojoLogin'])
    return false
    
  }
}
