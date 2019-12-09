import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.scss']
})
export class BarraComponent implements OnInit {

  @Input() titulo: string
  @Input() agregar: boolean
  @Input() atras: boolean
  @Input() editar: boolean
  @Input() buscar: boolean

  @Output() emitirAgregar = new EventEmitter()
  @Output() emitirEditar = new EventEmitter()
  @Output() emitirBuscar = new EventEmitter()
  @Output() emitirAtras = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  accionAgregar() {
    this.emitirAgregar.emit()
  }

  accionEditar() {
    this.emitirEditar.emit()
  }

  accionBuscar() {
    this.emitirBuscar.emit()
  }

  accionAtras() {
    this.emitirAtras.emit
  }

}
