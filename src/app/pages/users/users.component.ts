import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  public usuarios!:Usuario;
  public total!:number;
  public desde:number = 0;

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.obtenerUsuarios(this.desde);
  }
  
  next(){
    
    if(this.desde + 5 > this.total){
      return
    }else{
      this.desde = this.desde + 5;
    }
    
    this.obtenerUsuarios(this.desde);
  }

  previous(){
    if(this.desde - 5 < 0){
      return
    }else{
      this.desde = this.desde - 5;
    }
    this.obtenerUsuarios(this.desde);
  }

  borrarUsuario(id:string){
    this.usuarioService.EliminarUsuario(id)
      .subscribe(resp => {
        this.obtenerUsuarios(this.desde);
        Swal.fire('Eleminado', 'Este usuario fue eliminado satisfactoriamente', 'success');
      })
  }

  obtenerUsuarios(desde:number){
    this.usuarioService.ObtenerUsuarios(this.desde)
    .subscribe(({total, usuarios}) => {
      this.usuarios = usuarios;
      this.total = total;
    })
  }

}
