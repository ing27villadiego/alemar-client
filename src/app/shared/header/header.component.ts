import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../../services/service.index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public _sessionService: SessionsService
  ) { }

  ngOnInit() {
  }

}
