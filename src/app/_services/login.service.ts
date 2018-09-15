import { Injectable } from '@angular/core';
import { tap, catchError } from "rxjs/operators";
import { User } from '../classes';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public login(user: User): Observable<User>{
    return this.httpClient.post<User>(`${environment.appUrl}/login`, user);
  }
}
