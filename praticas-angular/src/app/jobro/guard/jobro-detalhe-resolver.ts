import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { JobroServicos } from "../jobro-servicos";

@Injectable({
    providedIn:'root'
})

export class JobroDetalheResolver{
    constructor(private jobroServicos:JobroServicos){}
        resolve(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
            ): Observable<any>|Promise<any>|any {
                let id = route.params['id']
                return this.jobroServicos.getJobro(id)
        }
}