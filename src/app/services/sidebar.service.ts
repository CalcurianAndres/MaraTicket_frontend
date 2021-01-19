import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[] = [
    {
      titulo: 'Perfil',
      color: 'azul',
      icono:'fas fa-user',
      submenu: [
        {
          titulo:'Ver perfil',
          url:'profile',
          icono: 'far fa-id-card'
        },
        {
          titulo:'Cambiar contraseña',
          url:'cambiar-password',
          icono: 'fas fa-user-lock'
        }
      ]
    },

    {
      titulo: 'Tickets',
      color: 'morado',
      icono:'fas fa-ticket-alt',
      submenu: [
        {
          titulo:'Bandeja',
          url:'bandeja',
          icono: 'fas fa-folder'
        },
        {
          titulo:'Nuevo',
          url:'nuevo',
          icono: 'fas fa-plus'
        },
        {
          titulo:'Estadística',
          url:'estadisticas',
          icono: 'fas fa-chart-pie'
        }
      ]
    },
    {
      titulo: 'Administración',
      color: 'negro',
      icono: 'fas fa-users-cog',
      submenu: [
        {
          titulo:'Usuarios',
          url:'usuarios',
          icono: 'fas fa-users'
        },
        {
          titulo:'Crear usuario',
          url:'nuevo-usuario',
          icono: 'fas fa-user-plus'
        }
      ]
    }
  ]

  constructor() { }
}
