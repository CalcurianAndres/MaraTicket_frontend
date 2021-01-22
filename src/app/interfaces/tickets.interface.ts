import { Ticket } from '../models/ticket.model';

export interface ticketsObtenidos {
    total:number; 
    ticket:Ticket[]; 
    abierto:number;
    ejecutandose:number;
    cerrado:number;
}