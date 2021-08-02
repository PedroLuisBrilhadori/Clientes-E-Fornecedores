import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { ClientesComponent } from './componentes/clientes.component';
import { DialogComponent } from '../public-api';




@NgModule({
  declarations: [
    ClientesComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    ClientesComponent
  ]
})
export class ClientesModule { }
