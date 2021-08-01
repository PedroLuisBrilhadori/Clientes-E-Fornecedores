import { Component, OnInit } from '@angular/core';

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
    private fornecedorService: FornecedorService
  ) { }

  carregaFornecedores(): void {
    this.fornecedorService.carregar()
    .subscribe(fornecedores => this.fornecedores = fornecedores);
  }

  apagaFornecedor(fornecedor: Fornecedor): void{
    this.fornecedores = this.fornecedores.filter(h => h !== fornecedor)
    this.fornecedorService.deleteFornecedor(fornecedor.id).subscribe();
  }

  ngOnInit(): void {
    this.carregaFornecedores();
  }

}
