import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { IFormJobroCanDeactivate } from "./iform-jobro-candeactivate";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class JobroDeactivateGuard implements CanDeactivate<IFormJobroCanDeactivate>{
        canDeactivate(
                component: IFormJobroCanDeactivate,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot
            ): Observable<boolean>|Promise<boolean>|boolean {
                console.log('Guarda de desativação Jobro')
                return component.podeDesativarJobro();
        }
}