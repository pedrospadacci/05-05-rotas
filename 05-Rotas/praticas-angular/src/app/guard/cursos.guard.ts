import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Auth } from "../login/auth";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class CursosGuard{
    constructor(private auth:Auth, private router:Router){}
    canActivateChild(
        route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot
    ): Observable<boolean> | boolean{
        if(this.auth.usuarioAutenticado){
            console.log('Guarda de rotas filhas')
            return true
        }
        this.router.navigate(['/login'])
        return false
    }
}