import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.css'
  ]
})
export class DashboardComponent{

  menuItems:any[];

  constructor(private sidebarService:SidebarService) {
    this.menuItems = sidebarService.menu;
  }

}
