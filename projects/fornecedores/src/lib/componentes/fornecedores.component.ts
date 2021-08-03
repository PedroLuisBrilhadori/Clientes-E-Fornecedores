import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogoComponent } from 'projects/shared/src/public-api';
import { FornecedorService } from '../servicos/fornecedores.service';
import { Fornecedor } from '../modelo/fornecedor';

@Component({
  selector: 'lib-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./styles.scss']
})
export class FornecedoresComponent implements OnInit {

  fornecedores: Fornecedor[] = [];

  constructor(
    private fornecedorService: FornecedorService,
    private dialogo: MatDialog
  ) { }

  carregaFornecedores(): void {
    this.fornecedorService.carregar()
    .subscribe(fornecedores => this.fornecedores = fornecedores);
  }

  chamarDialogo(fornecedor: Fornecedor): void{
    const dialogoRef = this.dialogo.open(DialogoComponent,{
      data:{
        menssagem: "Você deseja deletar o fornecedor: " + fornecedor.nome + "?" 
      }
    });
    dialogoRef.afterClosed().subscribe((confirmar: boolean) => {
      if(confirmar){
        this.apagaFornecedor(fornecedor);
      }
    });
  }

  apagaFornecedor(fornecedor: Fornecedor): void{
    this.fornecedores = this.fornecedores.filter(h => h !== fornecedor)
    this.fornecedorService.deleteFornecedor(fornecedor.id).subscribe();
  }

  ngOnInit(): void {
    this.carregaFornecedores();
  }

}
