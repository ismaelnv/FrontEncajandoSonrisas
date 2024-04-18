import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducto } from 'src/app/Modelo/producto.modelo';
import { ProductoService } from 'src/app/Service/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input()
  producto?: IProducto;
  id?:number;

  productId: string | null = null;

  constructor(private _serviceProducto:ProductoService,private route: ActivatedRoute){}

  ngOnInit(): void {

    this.productId = this.route.snapshot.paramMap.get('id');
    this.obtenerProductoId(Number(this.productId));
    
  }

  public obtenerProductoId(id:number){
    console.log("entrando al metodo"+id)

    this._serviceProducto.obtenerProductoId(id).subscribe((data:IProducto)=>{
    
      this.producto = data;
    })
  }

}
