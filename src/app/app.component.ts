import { Component } from '@angular/core';

import {MaterialModule} from './material/material.module';
import {User} from './classes'
import { SharedService } from './_services/shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Facegram';
  user : User;
  isLogged: boolean;

  constructor(private sharedService: SharedService){
    this.isLogged=this.sharedService.getIsLogged();
    this.user=this.sharedService.getUser();
  };

  delogin(){
    this.sharedService.setIsLogged(false);
    this.user = new User();
  }

}
