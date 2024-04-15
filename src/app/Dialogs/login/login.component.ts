import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { flatMap } from 'rxjs';
import { IPersona } from 'src/app/Modelo/persona.modelo';
import { PersonaService } from 'src/app/Service/persona.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  //mostrarModal:any = "false";
  listaPersonas:IPersona[] = [];
  mostrarError?:boolean ;
  mostrarModal?:boolean;

  formLogin:FormGroup

  constructor(
    private form:FormBuilder,
    private _personaService: PersonaService
    ){
    this.formLogin = this.form.group({
      usuario: ['',[Validators.email, Validators.required]],
      contrasena: ['',[Validators.required, Validators.minLength(6)]]
    })
  }
  ngOnInit(): void {
    this.mostrarError = false;
    this.mostrarModal = true;
  }

  hasErrors( controlName: string, errorType:string){
    return this.formLogin.get(controlName)?.hasError(errorType) && this.formLogin.get(controlName)?.touched
  }

  enviar(){
    console.log(this.formLogin)
  }

  iniciarSesion(){
    const usuario = this.formLogin.get('usuario')?.value;
    const contrasena = this.formLogin.get('contrasena')?.value;

    this._personaService.obtenerPersonas().subscribe((data:IPersona[])=>{
      this.listaPersonas = data;

      data.forEach((per)=>{
        if(per.correo === usuario && per.password === contrasena){
          console.log("persona correcta")
          this.mostrarModal = false;
        }
      })
      
    })
    this.mostrarError = true;
    console.log("Usuario Invalido")

  }
}
