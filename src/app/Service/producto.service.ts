import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IProducto } from '../Modelo/producto.modelo';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseUrl = 'http://localhost:8080';

  idProSubject = new Subject<number>(); // Sujeto para emitir IDs
  idOProbservable$: Observable<number> = this.idProSubject.asObservable();
  
  constructor(private _httpclient: HttpClient) { }

  obtenerProductos():Observable<IProducto[]>{
    return this._httpclient.get<IProducto[]>(`${this.baseUrl}/productos`);
  }

  obtenerProductoId(id:number):Observable<IProducto>{
    
    var ruta = `${this.baseUrl}/productos/${id}`;
    console.log("ruta"+ruta);

    return this._httpclient.get<IProducto>(`${this.baseUrl}/productos/${id}`);
  }

  public obtenerId(idProducto:number){

    console.log("es el id"+idProducto)

    this.idProSubject.next(idProducto);
  }

}
