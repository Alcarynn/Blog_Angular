import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CrudService } from '../_services/crud.service';
import { MessageService } from "../_services/message.service";
import { Post } from '../classes';


@Injectable({
  providedIn: 'root'
})
export class PostService extends CrudService<Post> {

  constructor(httpClient: HttpClient, messageService: MessageService) 
		{ 
		  super(httpClient, messageService, `post`);
		}
}
