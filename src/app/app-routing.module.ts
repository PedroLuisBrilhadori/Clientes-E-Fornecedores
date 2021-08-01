import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { ClientesComponent } from 'projects/clientes/src/public-api';
import { FornecedoresComponent } from 'projects/fornecedores/src/public-api';

const routes: Routes = [
  {path: '', redirectTo: 'clientes', pathMatch: 'full'},
  {path: 'clientes', component: ClientesComponent},
  {path: 'fornecedores', component: FornecedoresComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
