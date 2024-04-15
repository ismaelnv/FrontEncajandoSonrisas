import { Component } from '@angular/core';
import { LoginComponent } from 'src/app/Dialogs/login/login.component';

@Component({
  selector: 'app-barra-de-navegacion',
  templateUrl: './barra-de-navegacion.component.html',
  styleUrls: ['./barra-de-navegacion.component.css']
})
export class BarraDeNavegacionComponent {

  mostrarModal = false;

  abrirModal() {
    this.mostrarModal = true;
  }
}
