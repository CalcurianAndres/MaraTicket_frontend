import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { PagesComponent } from './pages.component';
import { BandejaComponent } from './bandeja/bandeja.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { GraficasComponent } from './graficas/graficas.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NewUserComponent } from './new-user/new-user.component';
import { TicketComponent } from './ticket/ticket.component';


const routes: Routes = [
    { path: 'dashboard', 
    component:PagesComponent,
    canActivate: [AuthGuard],
    children:[
      { path: '', component: DashboardComponent},
      { path: 'profile', component: ProfileComponent , data:{titulo:'Perfil'}},
      { path: 'cambiar-password', component:ChangePasswordComponent , data:{titulo:'Cambiar contraseña'}},
      { path: 'bandeja', component: BandejaComponent, data:{titulo:'Bandeja'}},
      { path: 'nuevo', component: NuevoComponent, data:{titulo:'Nuevo ticket'}},
      { path: 'estadisticas', component: GraficasComponent, data:{titulo:'Estadisticas'}},
      { path: 'usuarios', component: UsersComponent , data:{titulo:'Usuarios'}},
      { path: 'nuevo-usuario', component: NewUserComponent , data:{titulo:'Nuevo usuarios'}},
      { path: 'ticket/:id', component: TicketComponent , data:{titulo:'ticket'}}
    ]},
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class PageRoutingModule{}