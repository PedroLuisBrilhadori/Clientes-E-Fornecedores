import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogoComponent } from 'projects/shared/src/public-api';
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
    public dialog: MatDialog
  ) { }
  
  carregarClientes(): void {
    this.clientesService.carregar()
    .subscribe(clientes => this.clientes = clientes)
  }

  chamarDialogo(cliente: Cliente): void {

    const dialogRef = this.dialog.open(DialogoComponent, {
      data: {menssagem: "deseja excluir o cliente: " + cliente.nome + "?"},
    })

    dialogRef.afterClosed().subscribe((resposta: Boolean) => {
      if(resposta){
        this.apagarCliente(cliente);
      }
    })
  }
  
  apagarCliente(cliente: Cliente): void {
    this.clientes = this.clientes.filter(h => h !== cliente);
    this.clientesService.deleteCliente(cliente.id).subscribe();
  }

  ngOnInit(): void {
    this.carregarClientes()
  }
}



