import { Component, Input, OnInit } from '@angular/core';
import { IProducto } from 'src/app/Modelo/producto.modelo';

@Component({
  selector: 'app-list-categoria',
  templateUrl: './list-categoria.component.html',
  styleUrls: ['./list-categoria.component.css']
})
export class ListCategoriaComponent{

  @Input()
  lista: IProducto[] = [];

  constructor(){
  }

  decremento( producto:IProducto){

    if (producto && producto.cantidadV !== undefined && producto.cantidadV > 1) {

      producto.cantidadV--;
    }
  }

  incremento(producto:IProducto ){

    if (producto && producto.cantidadV !== undefined && producto.cantidadV < 3) {

      producto.cantidadV++;
    }
  }
}
