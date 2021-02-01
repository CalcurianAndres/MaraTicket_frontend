import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { FileUploadsService } from 'src/app/services/file-uploads.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls:  ['./profile.component.css']
})
export class ProfileComponent{

  cargando = false;

  public usuario:Usuario;
  public ImgSubir!:File;

  constructor(private usuarioService:UsuarioService,
              private fileUploadsService:FileUploadsService) {
    this.usuario = usuarioService.usuario;
    console.log(this.usuario)
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

}
