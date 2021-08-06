import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Fornecedor } from '../modelo/fornecedor';
import { SharedService } from '../../../../shared/src/public-api';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService implements SharedService{

  fornecedorUrl = 'api/db';

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  carregar(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.fornecedorUrl)
    .pipe(
      map(Fornecedor => Fornecedor.filter((e: Fornecedor) => e.cargo === 'Fornecedor'))
      );
  }


  deleteFornecedor(id: Number): Observable<Fornecedor>{
    const url = `${this.fornecedorUrl}/${id}`;

    return this.http.delete<Fornecedor>(url, this.httpOptions)
  }
}
