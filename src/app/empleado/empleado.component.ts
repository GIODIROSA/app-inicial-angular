import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent implements OnInit {
  nombre = 'Juan';
  apellido = 'Díaz';
  edad = 18;
  //empresa = 'Píldoras informáticas';

  /*   getEdad() {
    return this.edad;
  } */

  /*   llamaEmpresa(value:String){
  } */

  habilitacionCuadro = true;
  usuRegistrado = false;

  getRegistradoUsuario() {
    this.usuRegistrado = true;
  }

  constructor() {}

  ngOnInit(): void {}
}
