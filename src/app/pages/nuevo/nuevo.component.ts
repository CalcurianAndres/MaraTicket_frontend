import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { TicketService } from 'src/app/services/ticket.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styles: [
  ]
})
export class NuevoComponent {

  public usuario:Usuario;

  public newTicketForm = this.fb.group({
    Titulo:['', Validators.required],
    Descripcion:['', Validators.required],
  });

  constructor(private usuarioService:UsuarioService,
              private ticketService:TicketService,
              private fb:FormBuilder) {
    this.usuario = usuarioService.usuario;
  }

  NuevoTicket(){
    this.ticketService.crearTicket(this.newTicketForm.value)
        .subscribe(resp => {
          console.log(resp)
        })
  }

}
