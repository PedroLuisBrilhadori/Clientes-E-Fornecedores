import { Inject, Component, OnInit, Injectable } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { ClientesService } from '../servicos/clientes.service';
import { Cliente } from '../modelos/clientes';


interface DataDialog{
  client: Cliente,
  clientes: Cliente[]
}
@Component({
  selector: 'lib-clientes',
  templateUrl: './clientes.component.html', 
  styleUrls: ['./styles.scss']
})
// @Injectable()

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

    const dialogRef = this.dialog.open(DialogComponent, {
      data: {client: cliente, clientes: this.clientes},
    })

    dialogRef.afterClosed().subscribe(resposta => {
      console.log(resposta);
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


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog.html'
})
export class DialogComponent {
  constructor (
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataDialog,
    public clientesService: ClientesService,
    public apaga: ClientesComponent
) {}

  apagarCliente(cliente: Cliente): void {
    this.apaga.clientes = this.apaga.clientes.filter(h => h !== cliente);
    this.clientesService.deleteCliente(cliente.id).subscribe();
  }

  naoQuero(): void {
    this.dialogRef.close();
  }
}

