import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { FileUploadsService } from 'src/app/services/file-uploads.service';
import { perfilObtenido } from 'src/app/interfaces/estadisticas.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls:  ['./profile.component.css']
})
export class ProfileComponent{

  cargando = false;
  cargando_ = true;

  public usuario:Usuario;
  public ImgSubir!:File;
  public datosUsuario!:perfilObtenido;

  constructor(private usuarioService:UsuarioService,
              private fileUploadsService:FileUploadsService) {
    this.usuario = usuarioService.usuario;
  }

  ngOnInit(): void {
    this.cargarPerfil(this.usuario._id);
  }

  CambiarImagen( event:any ){
    this.ImgSubir = (event.target).files[0];
    document.getElementsByClassName('file-name')[0].innerHTML = this.ImgSubir.name;
  }

  subirImagen(){
    this.cargando = true;
    this.fileUploadsService.actualizarFoto(this.ImgSubir, 'usuarios', this.usuario._id )
    .then(img => {
      if(img){
        this.usuario.img = img;
        document.getElementsByClassName('file-name')[0].innerHTML = 'Sin archivo...'
      }
      this.cargando = false;
    });
  }

  cargarPerfil(usuario:any){

    this.usuarioService.cargarPerfil(usuario)
      .subscribe(resp =>{
        this.datosUsuario = resp;
        this.cargando_ = false;
      })
  }

}
