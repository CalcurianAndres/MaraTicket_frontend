import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bandeja',
  templateUrl: './bandeja.component.html',
  styleUrls: [
    './bandeja.component.css'
  ]
})
export class BandejaComponent implements OnInit {

  Bandeja:String = 'Bandeja';
  
  constructor() { }

  ngOnInit(): void {
  }

}
