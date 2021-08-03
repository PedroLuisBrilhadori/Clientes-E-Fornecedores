import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'lib-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent {

  menssagem: string = 'Você deseja excluir?';

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogoRef: MatDialogRef<DialogoComponent>
  ) 
  { if (data) {this.menssagem = data.menssagem || this.menssagem}}

  comfirmarClick(): void {
    this.dialogoRef.close(true);
  }

}
