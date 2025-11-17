import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { IFormNendoCanDeactivate } from "./iform-nendo-candeactivate";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class NendoDeactivate implements CanDeactivate<IFormNendoCanDeactivate>{
        canDeactivate(
                component: IFormNendoCanDeactivate,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot
            ): Observable<boolean>|Promise<boolean>|boolean {
                console.log('Guarda de desativação nendoroid')
                return component.podeDesativarNendo()
        }
}