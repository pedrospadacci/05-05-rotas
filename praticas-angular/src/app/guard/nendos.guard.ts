import { Injectable } from "@angular/core";
import { NendoAuth } from "../nendo-login/nendo-auth";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class NendosGuard{
    constructor(
        private nendoAuth:NendoAuth,
        private router:Router
    ){}
    canActivateChild(
        route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot
    ):Observable<boolean> | boolean{
        if(this.nendoAuth.autenticado){
            console.log('Guarda de rotas filhas de nendoroids')
            return true
        }
        this.router.navigate(['/nendoLogin'])
        return false
    }
}