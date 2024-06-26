import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IProducto } from '../Modelo/producto.modelo';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseUrl = "http://localhost:8080/productos";

  dataSubject = new Subject<any>();
  productoCantidad$:Observable <any> = this.dataSubject.asObservable();

  constructor(private _httpclient: HttpClient) { }

  obtenerProductos():Observable<IProducto[]>{

    return this._httpclient.get<IProducto[]>(this.baseUrl);
  }

  obtenerProductoId(id:number):Observable<IProducto>{

    if (isNaN(id)) {
      throw new Error('El ID del producto no es un número válido');
    }
    
    return this._httpclient.get<IProducto>(`${this.baseUrl}/${id}`);
  }

  obtenerCantidadPorducto(cantidad:number){

    console.log("Cantidad 2"+cantidad);

    this.dataSubject.next(cantidad);
  }

}
