import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showFiller = false;

  sidebarmenus = [
        {
          state: 'dashboard',
          name: 'Dashboard',
          type: 'link',
          icon: 'av_timer'
        },
        {
          state: 'vehiculos',
          name: 'Vehiculos',
          type: 'link',
          icon: 'directions_car'
        },
        {
          state:'graficas',
          name: 'graficas',
          type: 'link',
          icon: 'trending_up'
        },
        {
          state:'progress',
          name: 'Progress',
          type: 'link',
          icon: 'view_comfy'
        }

    ];

}
