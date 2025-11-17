import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from "@angular/core";
import { AuthJojo } from '../jojo-login/auth-jojo';

@Injectable({
    providedIn:'root'
})

export class JojosGuards{
    constructor(
        private authJojo:AuthJojo,
        private router:Router
    ){}

    canActivateChild(
        route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot
    ):Observable<boolean>| boolean{
        if(this.authJojo.autenticado){
            return true
        }
        this.router.navigate(['/jojoLogin'])
        return false
    }
}