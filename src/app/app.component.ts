import { Component } from '@angular/core';

import {MaterialModule} from './material/material.module';
import {User} from './classes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Facegram';
  user : User;
  isLogged: boolean = false;

  constructor(){
    if(JSON.parse(localStorage.getItem('local_user')) !== null){
      this.isLogged=true;
      this.user=JSON.parse(localStorage.getItem('local_user'));
    }
  };

  delogin(){
    localStorage.removeItem('local_user');
    this.isLogged = false;
  }

}
