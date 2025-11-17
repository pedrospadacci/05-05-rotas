import { AuthJobro } from '../jobro-login/auth-jobro';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment } from "@angular/router";
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class AuthJobroGuard implements CanActivate, CanMatch{

    constructor(
        private authJobro:AuthJobro,
        private router:Router
    ){}
    private verificarAcesso(){
        if(this.authJobro.autenticado){
            return true
        }
        this.router.navigate(['/jobroLogin'])
        return false
    }

    canActivate(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
                return this.verificarAcesso();
            }
    canMatch(route: Route,
         segments: UrlSegment[]):
         Observable<boolean>|Promise<boolean>| boolean {
            console.log('Auth Jobro CanMatch chamado')
        return this.verificarAcesso()
    }   
    
}