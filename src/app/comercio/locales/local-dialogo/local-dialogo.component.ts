import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Local } from 'src/app/modelo/comercio/local.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LocalService } from 'src/app/modelo/comercio/local.service';

@Component({
  selector: 'app-local-dialogo',
  templateUrl: './local-dialogo.component.html',
  styleUrls: ['./local-dialogo.component.scss']
})
export class LocalDialogoComponent implements OnInit {

  form: FormGroup
  local: Local

  constructor(@Inject(MAT_DIALOG_DATA) data, private localServicio: LocalService,
    private dialogo: MatDialogRef<LocalDialogoComponent>) {
    this.local = data.local
  }


  ngOnInit() {
    this.form = Local.getForm(this.local)
  }

  cancelar() {
    this.dialogo.close(null)
  }

  aceptar() {
    this.localServicio.createOrUpdate(this.form.value).subscribe(
      resultado => {
        this.dialogo.close(resultado)
      }
    )
  }

}
