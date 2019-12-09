import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Local } from 'src/app/modelo/comercio/local.model';

@Component({
  selector: 'app-local-list',
  templateUrl: './local-list.component.html',
  styleUrls: ['./local-list.component.scss']
})
export class LocalListComponent implements OnInit {

  @Input() local: Local
  @Output() emitirEditar = new EventEmitter()
  @Output() emitirEliminar = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  accionEditar() {
    this.emitirEditar.emit(this.local)
  }

  accionEliminar() {
    this.emitirEliminar.emit(this.local)
  }
}
