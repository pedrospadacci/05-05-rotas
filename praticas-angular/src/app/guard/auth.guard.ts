import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from '../login/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanMatch {

  constructor(
    private authServico: Auth,
    private router: Router
  ) {}

  private verificarAcesso() {
    if (this.authServico.usuarioAutenticado) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.verificarAcesso();
  }

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | boolean {
    console.log('AuthGuard CanMatch');
    return this.verificarAcesso();
  }
}
