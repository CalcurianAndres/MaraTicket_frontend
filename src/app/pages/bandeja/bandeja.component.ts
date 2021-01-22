import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from 'src/app/models/ticket.model';

@Component({
  selector: 'app-bandeja',
  templateUrl: './bandeja.component.html',
  styleUrls: [
    './bandeja.component.css'
  ]
})
export class BandejaComponent implements OnInit {
  cargando:boolean = true;

  public Bandeja:String = 'Bandeja';
  public tickets!:Ticket[];
  public total:number = 0;
  public abierto:number = 0;
  public ejecutandose:number = 0;
  public cerrado:number = 0;
  public desde:number = 0;
    
  constructor(private ticketService:TicketService) { }

  ngOnInit(): void {
    this.llenarBandeja(0);
  }

  llenarBandeja(desde:number){
    this.cargando = true;
    this.ticketService.obtenerTickets(desde)
        .subscribe(({total, ticket, abierto, ejecutandose, cerrado}) => {
          this.tickets = ticket;
          this.total = total;
          this.abierto = abierto;
          this.ejecutandose = ejecutandose;
          this.cerrado = cerrado;
          this.cargando = false;
        });
  }

  next(){
    
    if(this.desde + 5 > this.total){
      return
    }else{
      this.desde = this.desde + 5;
    }
    
    this.llenarBandeja(this.desde);
  }

  previous(){
    if(this.desde - 5 < 0){
      return
    }else{
      this.desde = this.desde - 5;
    }
    this.llenarBandeja(this.desde);
  }

}
