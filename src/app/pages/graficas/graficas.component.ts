import { Component } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent {

  public LabelsGeneral:string[] = ['Abiertos','Cerrados','En proceso' ];
  public DataGeneral:MultiDataSet = [[10,30,5]];
}
