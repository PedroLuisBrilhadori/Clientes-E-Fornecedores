import { NgModule } from '@angular/core';
import { SharedModule } from 'projects/shared/src/public-api';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { FornecedoresComponent } from './componentes/fornecedores.component';




@NgModule({
  declarations: [
    FornecedoresComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule
    
  ],
  exports: [
    FornecedoresComponent
  ]
})
export class FornecedoresModule { }
