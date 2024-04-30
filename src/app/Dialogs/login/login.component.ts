import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { IPersona } from 'src/app/Modelo/persona.modelo';
import { PersonaService } from 'src/app/Service/persona.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  listaPersonas:IPersona[] = [];
  mostrarError?:boolean ;  

  formLogin:FormGroup


  constructor(
    private form:FormBuilder,
    private _personaService: PersonaService,
    private router:Router,
    private modalRef: MdbModalRef<LoginComponent>
    ){
    this.formLogin = this.form.group({
      usuario: ['',[Validators.email, Validators.required]],
      contrasena: ['',[Validators.required, Validators.minLength(6)]]
    })
  }
  
  hasErrors( controlName: string, errorType:string){
    return this.formLogin.get(controlName)?.hasError(errorType) && this.formLogin.get(controlName)?.touched
  }

  enviar(){
    console.log(this.formLogin)
  }

  close(): void {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  }

  iniciarSesion(): void {
    const usuario = this.formLogin.get('usuario')?.value;
    const contrasena = this.formLogin.get('contrasena')?.value;

    this._personaService.obtenerPersonas().subscribe((data:IPersona[])=>{
      this.listaPersonas = data;

      data.forEach((per)=>{
        if(per.correo === usuario && per.password === contrasena){
          console.log("persona correcta");
          this.router.navigateByUrl("/categoria")
          const closeMessage = 'Modal closed';
          this.modalRef.close(closeMessage);

            
        }
      })
      
    })
    this.mostrarError = true;
    console.log("Usuario Invalido")
  }

}
