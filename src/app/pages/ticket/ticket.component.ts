import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from 'src/app/models/ticket.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  public ticket!:Ticket;
  public usuario!:Usuario;
  public cargando:boolean = true;

  constructor(private route:ActivatedRoute,
              private usuarioService:UsuarioService,
              private ticketService:TicketService) { 
              this.usuario = this.usuarioService.usuario;
              }

  ngOnInit(): void {
    this.getTicket();
  }
  
  getTicket(){
    this.cargando = true;
    const id = this.route.snapshot.paramMap.get('id');

    this.ticketService.obtenerUnTicket(id)
        .subscribe(ticket => {
          this.ticket = ticket;
          this.cargando = false;
        })
  }

}
