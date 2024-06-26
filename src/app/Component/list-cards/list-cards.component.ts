import { Component, Input} from '@angular/core';
import { IProducto } from 'src/app/Modelo/producto.modelo';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent  {
  
  @Input()
  lista: IProducto[] = [];
}
