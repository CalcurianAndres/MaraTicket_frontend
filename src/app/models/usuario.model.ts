import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

export class Usuario {
    constructor(
        public estado: boolean, 
        public _id: string,
        public Nombre: string, 
        public Apellido: string, 
        public Correo: string,
        public Departamento:string,
        public Role?: string,
        public AnyDesk?: string,
        public img?:string
    ) {}

    profilePic(){
        if( this.img) {
            return `${base_url}/imagen/usuarios/${this.img}`;
        }else{
            return `${base_url}/imagen/usuarios/no-image`;
        }
    }
}