import { Component, OnInit } from '@angular/core';
import { Local } from 'src/app/modelo/comercio/local.model';
import { LocalService } from 'src/app/modelo/comercio/local.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LocalDialogoComponent } from './local-dialogo/local-dialogo.component';
import { UtilConfirmacionComponent } from 'src/app/shared/util-confirmacion/util-confirmacion.component';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.scss']
})
export class LocalesComponent implements OnInit {

  locales: Local[]
  local: Local

  constructor(private localService: LocalService, public dialog: MatDialog) { }

  ngOnInit() {
    this.cargarLocales()
  }

  cargarLocales() {
    this.localService.list().subscribe(
      resultado => {
        this.locales = resultado
      }
    )
  }

  agregarLocal() {
    this.local = new Local()
    this.abrirDialogo()
  }

  editarLocal(local) {
    this.local = local
    this.abrirDialogo()
  }

  abrirDialogo() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      local: this.local
    };
    const dialogRef = this.dialog.open(LocalDialogoComponent, dialogConfig)
    dialogRef.afterClosed().subscribe(
      resultado => {
        console.log(resultado)
        if (resultado) {
          this.cargarLocales()
        }
      }
    )
  }


  confirmarDialogo(local: Local) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      titulo: "¿Está seguro de eliminar el local?"
    };
    const dialogRef = this.dialog.open(UtilConfirmacionComponent, dialogConfig)
    dialogRef.afterClosed().subscribe(
      resultado => {
        if (resultado) {
          this.eliminarLocal(local)
        }
      }
    )
  }

  eliminarLocal(local: Local) {
    this.localService.delete(local).subscribe(
      resultado => {
        this.cargarLocales()
      }
    )
  }


}
