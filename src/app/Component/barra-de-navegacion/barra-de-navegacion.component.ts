import { Component } from '@angular/core';
import { LoginComponent } from 'src/app/Dialogs/login/login.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-barra-de-navegacion',
  templateUrl: './barra-de-navegacion.component.html',
  styleUrls: ['./barra-de-navegacion.component.css']
})
export class BarraDeNavegacionComponent {

  modalRef: MdbModalRef<LoginComponent> | null = null;

  constructor(private modalService: MdbModalService) {}

  openModal() {
    this.modalRef = this.modalService.open(LoginComponent);
    this.modalRef.onClose.subscribe((message: any) => {
      console.log(message);
    });
  }

}
