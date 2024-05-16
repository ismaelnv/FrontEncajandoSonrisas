import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { LoginComponent } from '../login/login.component';
import { formatDate } from '@angular/common';
import { PersonaService } from 'src/app/Service/persona.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  mostrarError?:boolean ;  

  formRegistro:FormGroup;

  modalRef2: MdbModalRef<LoginComponent> | null = null;

  mostrarContrasena = false;

  fechaCreacion = new Date();

  fechaActulizacion = new Date();


  constructor(
    private modalRef: MdbModalRef<RegistroComponent>,
    private form:FormBuilder,
    private modalService: MdbModalService,
    private _personaService:PersonaService
  ) {
    this.formRegistro = this.form.group({
      usuario: ['',[Validators.email, Validators.required]],
      contrasena: ['',[Validators.required, Validators.minLength(6)]],
      nombres:['',Validators.required],
      apellidos:['',Validators.required],
      fecnac:['',Validators.required],
      dni: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{8}$') // Validar que tenga exactamente 8 dígitos
      ]],
      telefono: ['', [
      Validators.required,
      Validators.pattern('^[0-9]{9}$') // Validar que tenga exactamente 9 dígitos
      ]],

    })
  }

  openModal() {
    this.close();
    this.modalRef2 = this.modalService.open(LoginComponent);
    this.modalRef2.onClose.subscribe((message: any) => {
      console.log(message);
    });
  }

  close(): void {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  }

  hasErrors( controlName: string, errorType:string){
    return this.formRegistro.get(controlName)?.hasError(errorType) && this.formRegistro.get(controlName)?.touched
  }

  enviar(){
    console.log(this.formRegistro)
  }

  guardarPersona(): void {
    const usuario = this.formRegistro.get('usuario')?.value;
    const contrasena = this.formRegistro.get('contrasena')?.value;
    const nombres = this.formRegistro.get('nombres')?.value;
    const apellidos = this.formRegistro.get('apellidos')?.value;
    const dni = this.formRegistro.get('dni')?.value;
    const telefono = this.formRegistro.get('telefono')?.value;

    
    const fecnac = this.formRegistro.get('fecnac')?.value;
    const fechaCreFormateada = formatDate(this.fechaCreacion,'yyyy-MM-dd', 'en-US');
    const fechaActFormateada = formatDate(this.fechaActulizacion,'yyyy-MM-dd', 'en-US');

    const datos = {
      correo: usuario,
      password: contrasena,
      nombres: nombres,
      apellidoPaterno: apellidos,
      apellidoMaterno: apellidos,
      fechaNacimiento: fecnac,
      fechaCreacion: fechaCreFormateada,
      fechaActulizacion:fechaActFormateada,
      telefono: telefono,
      dni:dni
    };
  
    this._personaService.agregarPersona(datos).subscribe(
      mensaje => {
        console.log(datos);
        console.log("Persona guardada correctamente");
        
      },
      error => {
        console.error("Error al guardar la persona:", error);
        
      }
    );
    this.close()
    this.openModal();

    // this._personaService.obtenerPersonas().subscribe((data:IPersona[])=>{
    //   this.listaPersonas = data;

    //   data.forEach((per)=>{
    //     if(per.correo === usuario && per.password === contrasena){
    //       console.log("persona correcta");
    //       this.router.navigateByUrl("/categoria")
    //       this.close();

            
    //     }
    //   })
      
    // })
    // this.mostrarError = true;
    // console.log("Usuario Invalido")
  }

  mostrarPassword(): void {
    this.mostrarContrasena = !this.mostrarContrasena;
}

}
