import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { TicketService } from 'src/app/services/ticket.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styles: [
  ]
})
export class NuevoComponent {

  public usuario:Usuario;
  public cargando = false;
  public formSubmitted = false;


  public newTicketForm = this.fb.group({
    Departamento:['soporte',Validators.required],
    Titulo:['', Validators.required],
    Descripcion:['', Validators.required],
  });

  constructor(private usuarioService:UsuarioService,
              private ticketService:TicketService,
              private fb:FormBuilder) {
    this.usuario = usuarioService.usuario;
  }

  NuevoTicket(){
    this.formSubmitted = true;
    this.cargando = true;

    if(this.newTicketForm.invalid) {
      this.cargando = false;
      return;
    }

    this.ticketService.crearTicket(this.newTicketForm.value)
    .subscribe( resp => {
      this.cargando = false;
        Swal.fire('Nuevo Ticket!', 'Nuevo ticket creado satisfactoriamente', 'success');
        this.formSubmitted = false;
        this.newTicketForm.reset();
        this.newTicketForm.get('Departamento')?.setValue('soporte')
      }, (err)=> {
        //si sucede un error
        this.cargando = false;
        Swal.fire('Error', err.error.err.errors.Correo.message, 'error');
      } );
  }

  campoNoValido(campo:string):boolean{
    if ( this.newTicketForm.get(campo)?.invalid && this.formSubmitted ){
      return true;
    }else{
      return false;    
    }
  }

}
