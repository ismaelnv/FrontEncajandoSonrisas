import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IProducto } from 'src/app/Modelo/producto.modelo';
import { ProductoService } from 'src/app/Service/producto.service';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent {

  @Input()
  lista: IProducto[] = [];
  rutaStatica: string = "http://localhost:8080/imagenes/";

}
