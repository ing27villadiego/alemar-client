import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SessionsService } from '../sessions/sessions.service';


@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor(
    public _sessionService: SessionsService,
    public router: Router
  ){ }

  canActivate(){
    if ( this._sessionService.stateLogin()){
      console.log('paso por el guard')
      return true
    }else{
      console.log('bloqueado por guard')
      this.router.navigate(['/login'])
      return false
    }
  }
}
