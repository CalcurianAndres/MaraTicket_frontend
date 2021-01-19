import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styles: [
  ]
})
export class NuevoComponent implements OnInit {

  public usuario:Usuario;

  constructor(private usuarioService:UsuarioService) {
    this.usuario = usuarioService.usuario;
  }

  ngOnInit(): void {
  }

}
