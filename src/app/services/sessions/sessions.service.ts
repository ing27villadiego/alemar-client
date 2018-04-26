import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
// model de user
import { User } from '../../models/user.model';

// path base de la url de la api rest
import { REST_URLS } from '../../config/config';
import { Router } from '@angular/router';

@Injectable()
export class SessionsService {

  token: string
  user: User

  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    this.loadingStorage()
  }

  stateLogin(){
    return ( this.token.length > 5) ? true : false
  }

  saveStorage(id: string, token: string, user: User){
    localStorage.setItem('id', id)
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))
    this.token = token;
    this.user = user;
  }

  loadingStorage(){
    if ( localStorage.getItem('token')){
      this.token = localStorage.getItem('token')
      this.user = JSON.parse(localStorage.getItem('user'))
    }else{
      this.token = ''
      this.user = null
    }
  }

  login(user: User, recuerdame: boolean = false)
  {
    if(recuerdame){
      localStorage.setItem('email', user.email)
    }else{
      localStorage.removeItem('email')
    }
    let url = REST_URLS + '/sessions'
    return this.http.post(url, user)
            .map((resp: any) => {
              this.saveStorage(resp.id, resp.token, resp.user)
              return true
            })
  }

  logout(){
    this.token = ''
    this.user = null

    localStorage.removeItem('token')
    localStorage.removeItem('user')

    this.router.navigate(['/login'])

  }

}
