import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { ComponentsModule } from '../components/components.module';


import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from '../auth/register/register.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { BandejaComponent } from './bandeja/bandeja.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { GraficasComponent } from './graficas/graficas.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NewUserComponent } from './new-user/new-user.component';
import { TicketComponent } from './ticket/ticket.component';



@NgModule({
  declarations: [
    PagesComponent,
    ProfileComponent,
    RegisterComponent,
    DashboardComponent,
    UsersComponent,
    BandejaComponent,
    NuevoComponent,
    GraficasComponent,
    ChangePasswordComponent,
    NewUserComponent,
    TicketComponent
  ],
  exports: [
    PagesComponent,
    ProfileComponent,
    RegisterComponent,
    DashboardComponent,
    UsersComponent,
    BandejaComponent,
    NuevoComponent,
    GraficasComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class PagesModule { }
