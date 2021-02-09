import { Ticket } from '../models/ticket.model';

export interface estadisticaObtenida{
    ok:string;
    Total:number;
    Abiertos:number;
    Ejecutandose:number;
    Cerrados:number;
}

export interface perfilObtenido{
    ok:boolean,
    Total:Ticket[];
    Abiertos:number;
    Ejecutandose:number;
    Cerrados:number;
}