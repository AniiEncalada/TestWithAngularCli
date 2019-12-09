import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraComponent } from './barra/barra.component';
import { UtilModule } from '../util/util.module';
import { UtilLocalComponent } from './util-local/util-local.component';
import { UtilConfirmacionComponent } from './util-confirmacion/util-confirmacion.component';


@NgModule({
  declarations: [BarraComponent, UtilLocalComponent, UtilConfirmacionComponent],
  imports: [
    CommonModule,
    UtilModule,
  ],
  exports: [
    BarraComponent,
    UtilConfirmacionComponent,
    UtilLocalComponent,
  ]
})
export class SharedModule { }
