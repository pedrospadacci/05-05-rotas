import { Injectable } from "@angular/core";
import { AlunoForm } from "../aluno/aluno-form/aluno-form";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { IFormCandeactivate } from "./iform-candeactivate";

@Injectable({
    providedIn: 'root'
})

export class AlunoDeactivateGuard implements CanDeactivate<IFormCandeactivate>{
    canDeactivate(
        component:IFormCandeactivate,
        route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot
    ):Observable<boolean>|Promise<boolean>|boolean{
        console.log('Guarda de desativação')
        return component.podeDesativar()
    }
}