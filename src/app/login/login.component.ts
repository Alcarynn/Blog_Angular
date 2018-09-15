import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MaterialModule} from '../material/material.module';

import { User } from '../classes';
import { UserService } from '../_services/user.service';
import { SharedService } from '../_services/shared.service';
import { LoginService } from '../_services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {

  user: User = new User();
  isCorrect: boolean = false;
  result: string;
  isNew: boolean = false;
  @Output() childForm = new EventEmitter();

  constructor(
    private userService: UserService,
    private loginService: LoginService,
    private sharedService: SharedService) {
   }

  ngOnInit() {
  }

  login(): void{
    
    this.loginService.login(this.user).subscribe(user => {
      console.log(user);
      if(user === undefined){
        this.result = "Wrong login or password";
      }
      else{
        this.sharedService.setIsLogged(true);  
        this.sharedService.setUser(user);
        this.childForm.emit();
      }
    });
  }

  new(){
    this.isNew= true;
  }

  goBack(){
    this.isNew = false;
  }

  register(): void{
    this.userService.create(this.user).subscribe(user => {
      this.sharedService.setUser(user);
      this.childForm.emit();
    });
  }
}
