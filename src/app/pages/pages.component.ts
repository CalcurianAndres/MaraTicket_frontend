import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarService } from '../services/sidebar.service';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor(public sidebarService:SidebarService) { }

  ngOnInit(): void {
    this.sidebarService.cargarMenu();
  }

}
