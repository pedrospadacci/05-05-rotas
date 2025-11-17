import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { IFormJojoCanDeactivate } from "./iform-jojo-candeactivate";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class JojoCanDeactivate implements CanDeactivate<IFormJojoCanDeactivate>{
    canDeactivate(component: IFormJojoCanDeactivate,
          route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot):
         Observable<boolean>| Promise<boolean> |boolean {
            console.log('Guarda de Desativação Jojo')
        return component.podeDesativarJojo()
    }
}