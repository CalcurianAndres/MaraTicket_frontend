import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUserForm } from '../interfaces/register-form.interface';
import { LoginForm } from '../interfaces/login-form.interface';

import { environment } from 'src/environments/environment';
import { tap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';


const base_url = environment.base_url;
const login_url = environment.login_url

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  public usuario!:Usuario;

  constructor(private http:HttpClient,
              private router:Router) { }

  get token():string{
    return localStorage.getItem('token') || '';
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('login');
  }

  validarToken():Observable<boolean>{
    

    return this.http.get(`${login_url}/renew`,{
      headers:{
        'Authorization':this.token
      }
    }).pipe(
      tap( (resp:any) =>{

        const {estado,_id ,Nombre ,Apellido, Correo ,Role,AnyDesk, img} = resp.usuario;

        this.usuario = new Usuario(estado, _id, Nombre, Apellido, Correo, Role, AnyDesk, img);
        localStorage.setItem('token', resp.token);
      }),
      map(resp => true),
      catchError(error => of(false))
    )

  }

  crearUsuario( formData:NewUserForm ) {
    return this.http.post(`${ base_url }/usuario`, formData, {
      headers:{
        'Authorization':this.token
      }
    });
  }

  Login( formData:LoginForm ) { 
    return this.http.post(login_url, formData);
  }

}
