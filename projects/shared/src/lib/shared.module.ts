import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';

import { SharedComponent } from './shared.component';
import { DialogoComponent } from './dialogo/dialogo.component';



@NgModule({
  declarations: [
    SharedComponent,
    DialogoComponent
  ],
  imports: [
    MatDialogModule,
    MatButtonModule

  ],
  exports: [
    SharedComponent,
    DialogoComponent
  ]
})
export class SharedModule { }
