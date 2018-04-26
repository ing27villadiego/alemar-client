import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(  ){ }

  ngOnInit() {
  }

  menup: any = [
    {
      title: 'Vehiculos',
      icon: 'directions_car',
      submenu: [
        { title : 'Listado vehiculos', url: '/cars', icon: 'fa fa-circle-o' },
        { title: 'Combustible', url: '/gasolines', icon: 'fa fa-circle-o' },
        { title: 'Mantenimientos', url: '/maintenances', icon: 'fa fa-circle-o' },
      ]
    },
    {
      title: 'Talento humano',
      icon: 'wc',
      submenu: [
        { title: 'Conductores', url: '/chaufferurs', icon: 'fa fa-circle-o' },
        { title : 'Administrativos', url: '/chaufferurs', icon: 'fa fa-circle-o' }
      ]
    },
    {
      title: 'Inventario',
      icon: 'content_paste',
      submenu: [
        { title: 'Elementos Pasivos', url: '/chaufferurs', icon: 'fa fa-circle-o' },
        { title : 'Elementos Activos', url: '/chaufferurs', icon: 'fa fa-circle-o' },
        { title: 'Accesorios', url: '/chaufferurs', icon: 'fa fa-circle-o' },
      ]
    },
    {
      title: 'Infracciones',
      icon: 'report_problem',
      submenu: [
        { title: 'Infracciones de transito', url: '/chaufferurs', icon: 'fa fa-circle-o' },
        { title : 'Infracciones al reglamento', url: '/chaufferurs', icon: 'fa fa-circle-o' },
      ]
    },
    {
      title: 'Estadisticas',
      icon: 'multiline_chart',
      submenu: [
        { title: 'Conbustible', url: '/chaufferurs', icon: 'fa fa-circle-o' },
        { title : 'Mantenimiento', url: '/chaufferurs', icon: 'fa fa-circle-o' },
        { title : 'Infracciones', url: '/chaufferurs', icon: 'fa fa-circle-o' },
      ]
    },
    {
      title: 'Dashboard-admin',
      icon: 'dashboard',
      submenu: [
        { title : 'Usuarios', url: '/users', icon: 'fa fa-circle-o' },
        { title: 'Combustible', url: '/gasolines', icon: 'fa fa-circle-o' },
        { title: 'Mantenimientos', url: '/maintenances', icon: 'fa fa-circle-o' },
      ]
    }
  ];


}
