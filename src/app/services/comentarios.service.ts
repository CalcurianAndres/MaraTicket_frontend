import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { comentarioForm } from '../interfaces/comentario-form';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  get token():string{
    return localStorage.getItem('token') || '';
  }
  get headers(){
    return {
      'Authorization':this.token
    }
  }
  constructor(private http:HttpClient) { }

  enviarComentario(id:any, formData:comentarioForm){

    const url = `${base_url}/ticket/${id}`;

    return this.http.post(url, formData, {headers:this.headers})
      .pipe(
        map(resp => true),
        catchError(error => of(false))
      )
  }

}
