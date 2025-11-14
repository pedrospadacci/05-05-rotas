import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Nendoroid } from "../nendoroid";
import { Injectable } from "@angular/core";
import { NendoServico } from "../nendo-servico";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class NendoroidDetalheResolver implements Resolve<Nendoroid>{
    constructor(private nendoServico:NendoServico){}
    resolve(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot):
            Observable<any> | Promise<any> | any {
                let id = route.params['id']
                return this.nendoServico.getNendo(id)
            }
}