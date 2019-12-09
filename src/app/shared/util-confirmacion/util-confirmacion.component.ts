import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-util-confirmacion',
  templateUrl: './util-confirmacion.component.html',
  styleUrls: ['./util-confirmacion.component.scss']
})
export class UtilConfirmacionComponent implements OnInit {

  titulo: string;

  constructor(@Inject(MAT_DIALOG_DATA) data, private dialogo: MatDialogRef<UtilConfirmacionComponent>) {
    this.titulo = data.titulo
  }

  ngOnInit() {
  }

  aceptar() {
    this.dialogo.close(true)
  }

  cancelar() {
    this.dialogo.close(false)
  }

}
