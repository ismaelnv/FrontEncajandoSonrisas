import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IImagen } from 'src/app/Modelo/imagen.modelo';
import { IProducto } from 'src/app/Modelo/producto.modelo';
import { ProductoService } from 'src/app/Service/producto.service';

export interface ImageP{
  codigoImagen: number
  nombre:String;
}

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input()
  producto?: IProducto;
  imagenes: IImagen[] = [];
  id?:number;
  rutaStatica: string = "http://localhost:8080/imagenes/";
  cantidadP: number = 1;
  productId: string | null = null;

  constructor(private _serviceProducto:ProductoService,private route: ActivatedRoute){}

  ngOnInit(): void {

    this.productId = this.route.snapshot.paramMap.get('id');
    this.obtenerProductoId(Number(this.productId));
  }

  public obtenerProductoId(id:number){

    this._serviceProducto.obtenerProductoId(id).subscribe((data:IProducto)=>{
    
      this.producto = data;
      this.imagenes = data.imagenes;
    })
  }

  public incremento(){

    if(this.cantidadP < 3){

      this.cantidadP++;
    }
    
  }

  public decremento(){

    if( this.cantidadP > 1){

      this.cantidadP--;
    }
    
  }

}
