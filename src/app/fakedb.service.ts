import { Injectable } from "@angular/core";
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
      const db = [
          {id: 1, nome: 'Carlos', endereco: 'R. Sim', cnpj: '4587265-8', fornecedorDesde: 2018, cargo: 'Fornecedor'},
          {id: 2, nome: 'Carla', endereco: 'R. Não', cnpj: '4584566-8', fornecedorDesde: 2015, cargo: 'Fornecedor'},
          {id: 3, nome: 'Eduardo', endereco: 'R. Talvez', cnpj: '4123568-9', fornecedorDesde: 2020, cargo: 'Fornecedor'},
          {id: 4, nome: 'Sebastião', endereco: 'R. Quase', cnpj: '9856568-4', fornecedorDesde: 2010, cargo: 'Fornecedor'},
          {id: 5, nome: 'Glória', endereco: 'R. Deus', cpf: '45678912315', clienteDesde: 2015, cargo: 'Cliente'},
          {id: 6, nome: 'Geraldo', endereco: 'R. Excel', cpf: '15642678926', clienteDesde: 2016, cargo: 'Cliente'},
          {id: 7, nome: 'Antonio', endereco: 'R. 2', cpf: '46519768523', clienteDesde: 2018, cargo: 'Cliente'},
          {id: 8, nome: 'Barbara', endereco: 'R. Sales', cpf: '10256947814', clienteDesde: 2008, cargo: 'Cliente'}
      ];
      return {db};
  }
}