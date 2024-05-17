import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPersona } from '../Modelo/persona.modelo';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private baseUrl = 'http://localhost:8080';

  constructor(private _httpclient: HttpClient) { }

  obtenerPersonas():Observable<IPersona[]>{
    return this._httpclient.get<IPersona[]>(`${this.baseUrl}/personas`);
  }

  agregarPersona(datos:any){
    return this._httpclient.post<IPersona>(`${this.baseUrl}/personas`,datos)
  }

}
