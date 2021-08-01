import { Component, OnInit } from '@angular/core';

import { ClientesService } from '../servicos/clientes.service';
import { Cliente } from '../modelos/clientes';

@Component({
  selector: 'lib-clientes',
  templateUrl: './clientes.component.html', 
  styleUrls: ['./styles.scss']
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(
    private clientesService: ClientesService,
  ) { }
  
  carregarClientes(): void {
    this.clientesService.carregar()
    .subscribe(clientes => this.clientes = clientes)
  }

  apagarClientes(cliente: Cliente): void {
    this.clientes = this.clientes.filter(h => h !== cliente);
    this.clientesService.deleteCliente(cliente.id).subscribe();
  }

  ngOnInit(): void {
    this.carregarClientes()
  }
}
