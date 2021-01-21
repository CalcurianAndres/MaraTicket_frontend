import { Usuario } from './usuario.model';

export class Ticket {
    constructor(
        public _id:string,
        public descripcion:string,
        public estado:string,
        public titulo:string,
        public usuario:Usuario[]
    ){}
}