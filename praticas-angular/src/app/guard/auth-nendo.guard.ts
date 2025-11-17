import { Injectable } from '@angular/core';
import { Router, CanActivate, CanMatch, RouterStateSnapshot, ActivatedRouteSnapshot, Route, UrlSegment } from '@angular/router';
import { NendoAuth } from '../nendo-login/nendo-auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthNendoGuard implements CanActivate, CanMatch {

  constructor(
    private router: Router,
    private nendoAuth: NendoAuth
  ) {}

  private verificarAcessoNendo() {
    if (this.nendoAuth.autenticado) {
      return true;
    }
    this.router.navigate(['/nendoLogin']);
    return false;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.verificarAcessoNendo();
  }

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | boolean {
    return this.verificarAcessoNendo();
  }
}
