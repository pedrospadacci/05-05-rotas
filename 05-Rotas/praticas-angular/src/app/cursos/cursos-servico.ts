import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursosServico {
  private cursos = [
    {id:1,nome:'Angular'},
    {id:2,nome:'Java'},
    {id:3,nome:'TypeScript'},
    {id:4,nome:'JavaScript'},
  ]

  getCursos(){
    return this.cursos
  }

  getCurso(id:number){
    return this.cursos.find(curso=>curso.id == id)
  }
}
