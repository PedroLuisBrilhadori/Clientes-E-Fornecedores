import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ClientesComponent } from './componentes/clientes.component';



@NgModule({
  declarations: [
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule

  ],
  exports: [
    ClientesComponent
  ]
})
export class ClientesModule { }
