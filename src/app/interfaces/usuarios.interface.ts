import { Usuario } from "../models/usuario.model";

export interface usuariosObtenidos {
    total:number; 
    usuarios:Usuario[];
}