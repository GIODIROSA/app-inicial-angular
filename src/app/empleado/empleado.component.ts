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
  textoDeRegistro = 'No hay nadie registrado';

  getRegistradoUsuario() {
    this.usuRegistrado = false;
  }

  setUsuarioRegistrado(event: Event) {
    //alert('El usuario se acaba de registrar');
    //this.textoDeRegistro = 'El Usuario se acaba de registrar';
    //console.log(event.target);

    if ((<HTMLInputElement>event.target).value == 'si') {
      this.textoDeRegistro = 'El usuario se acaba de registrar';
    } else {
      this.textoDeRegistro = 'No hay nadie registrado';
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
