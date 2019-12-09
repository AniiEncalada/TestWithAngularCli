import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Local } from "./local.model";

export class Seccion {
    id: number
    nombre: string
    descripcion: string
    local: Local | any

    static getForm(seccion?: Seccion) {
        return new FormGroup({
         id: new FormControl(seccion.id),
         nombre: new FormControl(seccion.nombre, { validators: Validators.required }),
         descripcion: new FormControl(seccion.descripcion, { validators: Validators.required }),
         local: new FormControl(seccion.local, { validators: Validators.required })
       });
       }
}