import { Injectable } from '@angular/core';
import { User } from '../classes';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  user: User;
  isLogged: boolean;

  constructor() { }

  setUser(user: User){
    this.user = user;
  }

  getUser(): User{
    return this.user;
  }

  setIsLogged(bool: boolean){
    this.isLogged = bool;
  }

  getIsLogged():boolean{
    return this.isLogged;
  }
}
