import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Cliente } from '../modelos/clientes';
import { SharedService } from 'projects/shared/src/public-api';

@Injectable({
  providedIn: 'root'
})
export class ClientesService implements SharedService{

  
  private clientUrl = 'api/db';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}
  
  carregar(): Observable<Cliente[]> {
      return this.http.get<Cliente[]>(this.clientUrl)
      .pipe(
        map(clientes => clientes.filter((e: Cliente) => e.cargo === 'Cliente')));
  }

  deleteCliente(id: number): Observable<Cliente> {
    const url = `${this.clientUrl}/${id}`;

    return this.http.delete<Cliente>(url, this.httpOptions);
  }

}
