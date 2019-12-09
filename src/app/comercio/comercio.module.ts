import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalesComponent } from './locales/locales.component';
import { SeccionComponent } from "./seccion/seccion.component";
import { SharedModule } from '../shared/shared.module';
import { LocalDialogoComponent } from './locales/local-dialogo/local-dialogo.component';
import { LocalListComponent } from './locales/local-list/local-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilModule } from '../util/util.module';
import { UtilConfirmacionComponent } from '../shared/util-confirmacion/util-confirmacion.component';



@NgModule({
  declarations: [LocalesComponent,SeccionComponent,LocalListComponent,LocalDialogoComponent],
  imports: [
    CommonModule,
    SharedModule,
    UtilModule,
  ],
  exports: [
    LocalesComponent
  ],
  entryComponents: [
    UtilConfirmacionComponent,
    LocalDialogoComponent,
    LocalListComponent,
    SeccionComponent,
  ]
})
export class ComercioModule { }
