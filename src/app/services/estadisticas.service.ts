import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { estadisticaObtenida } from '../interfaces/estadisticas.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  constructor(
    private http:HttpClient
  ) { }

    estadisticaGeneral(){
      const url = `${base_url}/estadistica`
      let data;
      
      return this.http.get<estadisticaObtenida>(url)
        .pipe(
          map(resp =>{
            return data ={
              Total:resp.Total,
              Abiertos:resp.Abiertos,
              Ejecutandose:resp.Ejecutandose,
              Cerrados:resp.Cerrados
            }
          })
        )
    }

}
