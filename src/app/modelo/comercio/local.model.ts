import { FormGroup, FormControl, Validators } from '@angular/forms';

export class Local {
    id: number
    nombre: string

    static getForm(local?: Local) {
     return new FormGroup({
      id: new FormControl(local.id),
      nombre: new FormControl(local.nombre, { validators: Validators.required }),
    });
    }
}