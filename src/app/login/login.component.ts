import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MaterialModule} from '../material/material.module';

import { User } from '../classes';
import { UserService } from '../_services/user.service';
import { LoginService } from '../_services/login.service';
import { UserCrudService } from '../_services/user-crud.service';

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
    private userCrudService: UserCrudService,
    private loginService: LoginService) {
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
        localStorage.setItem('local_user', JSON.stringify(user));
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
    this.userCrudService.create(this.user).subscribe(user => {
      localStorage.setItem('local_user', JSON.stringify(user));
      this.childForm.emit();
    });
  }
}
