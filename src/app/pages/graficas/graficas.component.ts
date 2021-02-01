import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';
import { EstadisticasService } from 'src/app/services/estadisticas.service';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent {

  public data:any;
  public cargando:boolean = true;
  public DataGeneral:MultiDataSet = [[]];

  constructor(public estadisticaService:EstadisticasService)
  {}

  ngOnInit(): void {
    this.getData();
  }

  async getData(){
    this.cargando = true;
      this.estadisticaService.estadisticaGeneral()
        .subscribe(resp=>{
          
          this.data = resp;
          this.DataGeneral = [[this.data.Abiertos, this.data.Cerrados, this.data.Ejecutandose]]
          this.cargando = false;
        })
  }

  public LabelsGeneral:string[] = ['Abiertos','Cerrados','En proceso' ];
}
