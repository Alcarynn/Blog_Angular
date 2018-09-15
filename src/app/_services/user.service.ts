import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { User, Post } from '../classes';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private startpoint = environment.appUrl + '/user'

  constructor(private httpClient: HttpClient) 
		{ 
		}

		public getMyPage(id: number): Observable<Post[]> {
      return this.httpClient.get<any[]>(`${this.startpoint}/${id}/mypage`);
    }

    public getMyWall(id: number): Observable<Post[]> {
      return this.httpClient.get<any[]>(`${this.startpoint}/${id}/mywall`);
    }

    public getFriends(id: number): Observable<User[]> {
      return this.httpClient.get<any[]>(`${this.startpoint}/${id}/friendlist`);
    }

    public addFriend(id: number, friend: User){
      return this.httpClient.put(`${this.startpoint}/${id}`, friend);
    }
}
