import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { EstadisticasService } from 'src/app/services/estadisticas.service';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent{

  public data:any;

  constructor(
    public estadisticaService:EstadisticasService
  ){

  }
  
  ngOnInit(): void {
    this.estadisticaGeneral();
  }

  estadisticaGeneral(){
    this.estadisticaService.estadisticaGeneral()
      .subscribe(resp => {
        this.data = resp;
        console.log(this.data);
      })
    
    }
    
  @Input() title: string = 'Sin titulo'
  
  // Doughnut
  @Input('labels') doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('data') public doughnutChartData: MultiDataSet = [
    [15, 23, 100],
  ];
  public doughnutChartType: ChartType = 'doughnut';
}
