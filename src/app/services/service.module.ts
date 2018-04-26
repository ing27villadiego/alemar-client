import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SharedService,
  SidebarService,
  SessionsService,
  UserService,
  LoginGuardGuard

} from './service.index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SharedService,
    SidebarService,
    SessionsService,
    UserService,
    LoginGuardGuard
  ],
  declarations: []
})
export class ServiceModule { }
