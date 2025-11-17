import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, MaybeAsync, RedirectCommand, Resolve, RouterStateSnapshot } from "@angular/router";
import { Jojos } from "../jojos";
import { Observable } from "rxjs";
import { JojoServicos } from "../jojo-servicos";

@Injectable({
    providedIn:'root'
})

export class JojoDetalhesResolver implements Resolve<Jojos>{
    constructor(private jojoServicos:JojoServicos){}
    resolve(
         route: ActivatedRouteSnapshot,
         state: RouterStateSnapshot
        ):Observable<any> | Promise<any>| any {
        let id = route.params['id']
        return this.jojoServicos.getJojo(id)
    }
}