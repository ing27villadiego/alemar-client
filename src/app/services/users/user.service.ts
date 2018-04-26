import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { REST_URLS } from '../../config/config';

@Injectable()
export class UserService {

  constructor(
    public http: HttpClient
  ) { }

  /*
  login(user: User, recuerdame: boolean = false)
  {
    let url = REST_URLS + '/sessions';
    return this.http.post(url, user)
  }*/

}
