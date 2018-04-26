import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu = [
    {
      title: 'Vehiculos',
      icon: 'directions_car',
      submenu: [
        { title: 'Progress', url: '/progress' },
        { title: 'Crear vehiculos', url: '/cars/new' }
      ]
    }
  ];

  constructor() { }

}
