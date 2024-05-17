import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducto } from 'src/app/Modelo/producto.modelo';
import { ITipoProducto } from 'src/app/Modelo/tipoProducto.modelo';
import { CategoriasService } from 'src/app/Service/categorias.service';
import { ProductoService } from 'src/app/Service/producto.service';

@Component({
  selector: 'app-pagina-categoria',
  templateUrl: './pagina-categoria.component.html',
  styleUrls: ['./pagina-categoria.component.css']
})
export class PaginaCategoriaComponent implements OnInit{

  cProducto?: ITipoProducto;
  productos: IProducto[] = [];
  categoriaId: string | null = null;
  nombreCategoria: string | null = null;
  cantidadP: number = 0;
  cantidadGlobal: number = 0;
  
  public constructor(private _categoriaService:CategoriasService, private router: ActivatedRoute,private _serviceProducto: ProductoService){ 
  } 

  ngOnInit(): void {
    
    this.categoriaId = this.router.snapshot.paramMap.get('idp');
    const nombre = this.router.snapshot.paramMap.get('nombreC');

    this._serviceProducto.productoCantidad$.subscribe(cantidad =>{

      if (cantidad !== null && cantidad !== undefined) {

        this.cantidadGlobal = cantidad;
      }     
    })  

    
    if(nombre){

      this.nombreCategoria = decodeURIComponent(nombre)
    }

    this.obtenerProductosPorIdCProducto(Number(this.categoriaId));
  }

  public obtenerProductosPorIdCProducto(idCT: number){

    this._categoriaService.obtenerProductosPorIdCategoria(idCT).subscribe((data:ITipoProducto)=>{

      this.cProducto = data;
      this.productos = data.productos;

      this.productos.forEach(producto => {

        producto.cantidadV = 1;
      });

      this.cantidadP = data.productos.length;
    }) 
  }
}
