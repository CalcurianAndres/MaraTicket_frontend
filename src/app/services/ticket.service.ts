import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

import { NewTicketForm } from '../interfaces/ticket-form.interface';
import { ticketsObtenidos, ticketObtenidos } from '../interfaces/tickets.interface';
import { notificacionForm } from '../interfaces/notificacion-form';

import { map } from 'rxjs/operators';

import { Ticket } from '../models/ticket.model';
import { Usuario } from '../models/usuario.model';


const base_url = environment.base_url


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  public ticket!:Ticket
  
  constructor(private http:HttpClient,
              private router:Router) { }


  get token():string{
    return localStorage.getItem('token') || '';
  }
  get headers(){
    return {
      'Authorization':this.token
    }
  }

  crearTicket(formData:NewTicketForm){
    const url = `${base_url}/ticket`;
    return this.http.post(url, formData, {headers:this.headers});
  }

  obtenerTickets(desde:number = 0, usuario:Usuario){
    const departamento = usuario.Departamento;
    const url = `${base_url}/tickets?desde=${desde}&limite=5&departamento=${departamento}`;

    return this.http.get<ticketsObtenidos>(url, {headers:this.headers})
      .pipe(
        map(resp =>{
          const ticket = resp.ticket.map(
              ticket => new Ticket(ticket._id,ticket.descripcion,ticket.estado,ticket.titulo,ticket.departamento,ticket.usuario, ticket.comentarios, ticket.notificaciones, ticket.fecha)
          );
          return {
            total:resp.total,
            abierto:resp.abierto,
            ejecutandose:resp.ejecutandose,
            cerrado:resp.cerrado,
            ticket
          };
        }
        )
      )
  }

  obtenerUnTicket(id:any){
    const url = `${base_url}/ticket/${id}`;

    return this.http.get<ticketObtenidos>(url, {headers:this.headers})
      .pipe(
        map(resp => {
          const ticket = resp.ticket

          this.ticket = new Ticket(ticket._id,ticket.descripcion,ticket.estado,ticket.titulo,ticket.departamento, ticket.usuario, ticket.comentarios, ticket.notificaciones, ticket.fecha)

          return this.ticket;
        })
      )
  }

  ModificarTicket(id:any, data:notificacionForm){
    const url = `${base_url}/ticket/${id}`;

    return this.http.put(url, data, {headers:this.headers});
  }

}
