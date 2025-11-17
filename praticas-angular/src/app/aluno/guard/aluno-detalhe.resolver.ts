import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Aluno } from "../alunos";
import { AlunoService } from "../aluno-service";

@Injectable({
    providedIn:'root'
})
export class AlunoDetalheResolver implements Resolve<Aluno> {
    constructor(private alunoService: AlunoService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {
            let id = route.params['id']
            return this.alunoService.getAluno(id)
    }
}
