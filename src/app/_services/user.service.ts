import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CrudService } from './crud.service';
import { MessageService } from "./message.service";
import { User } from '../classes';


@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudService<User> {

  constructor(httpClient: HttpClient, messageService: MessageService) 
		{ 
		  super(httpClient, messageService, `user`);
		}
}
