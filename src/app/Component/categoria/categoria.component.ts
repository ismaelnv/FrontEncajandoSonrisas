import { Component, OnInit } from '@angular/core';
import { ITipoProducto } from 'src/app/Modelo/tipoProducto.modelo';
import { CategoriasService } from 'src/app/Service/categorias.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit{

  listaCategorias:ITipoProducto[] = [];

  constructor(private _categoriaService:CategoriasService){}


  ngOnInit(): void {
    this.cargarCategorias();
  }

  cargarCategorias(){

    this._categoriaService.obtenerCategorias().subscribe((data:ITipoProducto[])=>{
      this.listaCategorias = data;
      console.log(this.listaCategorias);
    })
  }

}
