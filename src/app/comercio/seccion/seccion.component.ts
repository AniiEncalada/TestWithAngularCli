import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Seccion } from 'src/app/modelo/comercio/seccion.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SeccionService } from '../../modelo/comercio/seccion.service';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.scss']
})
export class SeccionComponent implements OnInit {

  formSeccion: FormGroup
  seccion: Seccion

  constructor( private seccionServicio: SeccionService,
    ) {
    // this.seccion = data.seccion
  }


  ngOnInit() {
    this.formSeccion = Seccion.getForm(this.seccion)
  }

  cancelar() {
    // this.dialogo.close(null)
  }

  aceptar() {
    this.seccionServicio.createOrUpdate(this.formSeccion.value).subscribe(
      resultado => {
        console.log(resultado)
      }
    )
  }
}
