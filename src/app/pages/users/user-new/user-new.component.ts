import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit {

  forma: FormGroup;

  constructor() { }

  ngOnInit() {
    this.forma = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      role: new FormControl(null),
      avatar: new FormControl(null)
    });
  }

  permisos: any = [
        { name : 'Administrador Root', value: 'ROOT_ROLE' },
        { name : 'Administrador', value: 'ADMIN_ROLE' },
        { name : 'Estandar', value: 'USER_ROLE' },
  ];

  registerUser(){
    console.log(this.forma.value)
  }

}
