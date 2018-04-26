import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionsService } from '../services/service.index';
import { NgForm } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recuerdame: boolean = false;
  email: string;

  constructor(
    public router: Router,
    public _sessionService: SessionsService
  ) { }

  ngOnInit() {
    this.email = localStorage.getItem('email') || ''
    if(this.email.length > 0){
      this.recuerdame = true
    }
  }

  sigIn(forma: NgForm) {

    if(forma.invalid){
      return;
    }

    let usuario = new User(null, forma.value.email, forma.value.password);

    this._sessionService.login( usuario, forma.value.recuerdame)
                .subscribe(login => {
                  this.router.navigate(['/dashboard'])
                  console.log(login)
                });

  }

}
