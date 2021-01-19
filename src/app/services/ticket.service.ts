import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

import { NewTicketForm } from '../interfaces/ticket-form.interface';


const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class TicketService {

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

  crearTicket(formData:NewTicketForm){
    const url = `${base_url}/ticket`;
    return this.http.post(url, formData, {headers:this.headers});
  }

}
