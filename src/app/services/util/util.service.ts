import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

// models
import { State } from 'src/app/models/states';


@Injectable({
  providedIn: 'root'
})
export class UtilService {

  stations: any;

  constructor(
    private http: HttpClient
  ) { }

  listStates() {
    const urlStates = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/';
    return this.http.get<State>(urlStates)
      .pipe(
        map((states: any) => {
          let formatState: any[] = [];
          for (let state of states) {
            formatState.push({
              id: state.id,
              nome: state.nome
            })
          }
          return formatState;
        }))
  }
}
