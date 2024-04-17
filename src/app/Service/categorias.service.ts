import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITipoProducto } from '../Modelo/tipoProducto.modelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private baseUrl = 'http://localhost:8080';

  constructor(private _httpclient: HttpClient) { }

  obtenerCategorias():Observable<ITipoProducto[]>{
    return this._httpclient.get<ITipoProducto[]>(`${this.baseUrl}/tipo_productos`);
  }
}
