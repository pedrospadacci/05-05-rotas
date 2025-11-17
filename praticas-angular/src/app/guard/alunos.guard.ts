import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { Auth } from "../login/auth";

@Injectable({
    providedIn:'root'
})

export class AlunosGuard{
    constructor(private auth:Auth, private router:Router){}
    canActivateChild(
        route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot
    ): Observable<boolean> | boolean{
        if(this.auth.usuarioAutenticado){
            console.log('Guarda de rotas filhas de alunos')
            return true
        }
        this.router.navigate(['/login'])
        return false
    }
}