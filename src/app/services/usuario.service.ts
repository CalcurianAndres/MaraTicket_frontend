import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { NewUserForm } from '../interfaces/register-form.interface';
import { LoginForm } from '../interfaces/login-form.interface';
import { usuariosObtenidos } from '../interfaces/usuarios.interface';

import { environment } from 'src/environments/environment';
import { tap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

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
  get headers(){
    return {
      'Authorization':this.token
    }
   }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('menu');
    this.router.navigateByUrl('login');
  }

  validarToken():Observable<boolean>{
    

    return this.http.get(`${login_url}/renew`,{
      headers:this.headers
    }).pipe(
      tap( (resp:any) =>{

        const {estado,_id ,Nombre ,Apellido, Correo ,Departamento, Role,AnyDesk, img} = resp.usuario;

        this.usuario = new Usuario(estado, _id, Nombre, Apellido, Correo, Departamento,Role, AnyDesk, img);
        localStorage.setItem('token', resp.token);
        localStorage.setItem('menu', JSON.stringify( resp.menu) );
      }),
      map(resp => true),
      catchError(error => of(false))
    )

  }

  crearUsuario( formData:NewUserForm ) {
    return this.http.post(`${ base_url }/usuario`, formData, {
      headers:this.headers
    });
  }

  Login( formData:LoginForm ) { 
    return this.http.post(login_url, formData)
    .pipe(
      tap( (resp:any) =>{

        const {estado,_id ,Nombre ,Apellido, Correo , Departamento, Role,AnyDesk, img} = resp.usuario;

        this.usuario = new Usuario(estado, _id, Nombre, Apellido, Correo, Departamento, Role, AnyDesk, img);
        localStorage.setItem('token', resp.token);
        localStorage.setItem('menu', JSON.stringify( resp.menu) );
      })
    )
  }

  ObtenerUsuarios( desde:number = 0){
    const url = `${base_url}/usuarios?limite=5&desde=${desde}`;

    return this.http.get<usuariosObtenidos>(url,{headers:this.headers})
          .pipe(
            map( resp =>{
              
              const usuarios = resp.usuarios.map(
                user => new Usuario(user.estado, user._id, user.Nombre, user.Apellido, user.Correo, user.Departamento, user.Role, user.AnyDesk, user.img)
                
                );
              return {
                total:resp.total,
                usuarios
              };

            })
          )
  }

  EliminarUsuario(id:string){
    const url = `${base_url}/usuario/${id}`;

    return this.http.delete(url,{headers:this.headers});
  }

  EditarUsuario(data:Usuario){
    const url = `${base_url}/usuario/${data._id}`;
    const dato = {
      Role:data.Role,
      Departamento:data.Departamento
    }
    
    return this.http.put(url, dato, {
      headers:this.headers
    });
  }

}
