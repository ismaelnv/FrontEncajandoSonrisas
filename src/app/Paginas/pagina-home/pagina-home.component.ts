import { Component, OnInit } from '@angular/core';
import { IProducto } from 'src/app/Modelo/producto.modelo';
import { ProductoService } from 'src/app/Service/producto.service';

@Component({
  selector: 'app-pagina-home',
  templateUrl: './pagina-home.component.html',
  styleUrls: ['./pagina-home.component.css']
})
export class PaginaHomeComponent implements OnInit {
 

  productos: IProducto[] = [];
  cantidadProductos: number = 10;

  public constructor(private _serviceProducto: ProductoService){}

  public ngOnInit(): void {
    
    this.obtenerProductos();
  }

  public obtenerProductos(){

    this._serviceProducto.obtenerProductos().subscribe((data:IProducto[])=>{
    
      this.productos = data;
      this.cantidadProductos = data.length;
      this.setCantidadProducto(this.cantidadProductos);
    })
  }

  setCantidadProducto(cantidad:number){

    console.log("el valor es "+cantidad);
    this._serviceProducto.obtenerCantidadPorducto(cantidad);
  }
}
