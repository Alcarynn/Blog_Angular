import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../_services/crud.service';
import { User } from '../classes';


@Injectable({
  providedIn: 'root'
})

export class UserCrudService extends CrudService<User> {
   
  constructor(httpClient: HttpClient) 
  { 
    super(httpClient,  `user`);
  }
}
