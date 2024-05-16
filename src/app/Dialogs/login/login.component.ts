import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { IPersona } from 'src/app/Modelo/persona.modelo';
import { PersonaService } from 'src/app/Service/persona.service';
import { RegistroComponent } from '../registro/registro.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  listaPersonas:IPersona[] = [];
  mostrarError?:boolean ;  
  mostrarContrasena = false;

  formLogin:FormGroup

  modalRef2: MdbModalRef<RegistroComponent> | null = null;

  constructor(
    private form:FormBuilder,
    private _personaService: PersonaService,
    private router:Router,
    private modalRef: MdbModalRef<LoginComponent>,
    private modalService: MdbModalService
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

  openModal() {
    this.close();
    this.modalRef2 = this.modalService.open(RegistroComponent);
    this.modalRef2.onClose.subscribe((message: any) => {
      console.log(message);
    });
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

      let credencialesValidas = false;

      data.forEach((per)=>{
        if(per.correo === usuario && per.password === contrasena){
          console.log("persona correcta");
          credencialesValidas = true;
          this.router.navigateByUrl("/categoria")
          this.close(); 
        }

      });
      
      if (!credencialesValidas) {
        this.mostrarError = true;
        console.log("Usuario Invalido");
      }
      
    }
      ) 
    
  }
  mostrarPassword():void{
    this.mostrarContrasena = !this.mostrarContrasena;
  }

}
