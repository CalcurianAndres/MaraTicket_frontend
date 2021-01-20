import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [
    './sidebar.component.css'
  ]
})
export class SidebarComponent {

  public usuario:Usuario;

  constructor(private sidebarService:SidebarService,
              private usuarioService:UsuarioService) { 
    this.usuario = usuarioService.usuario;
  }


}
