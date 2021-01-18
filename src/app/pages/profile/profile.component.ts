import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls:  ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public usuario:Usuario;

  constructor(private usuarioService:UsuarioService) {
    this.usuario = usuarioService.usuario;
  }


  ngOnInit(): void {
  }

}
