import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';


import { SharedComponent } from './shared.component';
import { DialogoComponent } from './dialogo/dialogo.component';



@NgModule({
  declarations: [
    SharedComponent,
    DialogoComponent
  ],
  imports: [
    MatDialogModule,
  ],
  exports: [
    SharedComponent,
    DialogoComponent
  ]
})
export class SharedModule { }
