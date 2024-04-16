import { Component, Input } from '@angular/core';
import { ICard } from 'src/app/Modelo/cards.modelo';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent {

  @Input()
  lista: ICard[] = [];

}
