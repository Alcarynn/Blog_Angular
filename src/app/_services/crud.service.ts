import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Post, Resource } from '../classes';

import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { MessageService } from "./message.service"
import {environment} from '../environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


export class CrudService <T extends Resource> {

  private startpoint= environment.appUrl;
  private endpoint : string;
  private urlcomplete : string;

  constructor(    
      private httpClient: HttpClient,
      private messageService: MessageService, 
      endpoint: string) {
        this.endpoint = endpoint;
        this.urlcomplete = `${this.startpoint}/${this.endpoint}`;
      }

      
  
    public create(item: T): Observable<T> {
      return this.httpClient
        .post<T>(this.urlcomplete, item)
        .pipe(
          tap(_ => this.log(`added ${this.endpoint} id=${item.id}`)),
          catchError(this.handleError<any>('add'))
        );
    }

    public read(id: number): Observable<T> {
      return this.httpClient
        .get(`${this.urlcomplete}/${id}`)
        .pipe(
          tap(_ => this.log(`fetched ${this.endpoint} id=${id}`)),
          catchError(this.handleError<any>(`get id=${id}`))
          );
    }

    public getMyPage(id: number): Observable<any[]> {
      return this.httpClient
        .get(`${this.urlcomplete}/${id}/mypage`)
        .pipe(
          tap(_ => this.log(`fetched ${this.endpoint} id=${id}`)),
          catchError(this.handleError<any>(`get id=${id}`))
          );
    }

    public getComments(postid: number): Observable<any[]> {
      return this.httpClient
        .get(`${this.urlcomplete}/${postid}/comments`)
        .pipe(
          tap(_ => this.log(`fetched ${this.endpoint} id=${postid}`)),
          catchError(this.handleError<any>(`get id=${postid}`))
          );
    }
  
    public update(item: T): Observable<T> {
      return this.httpClient
        .put<T>(this.urlcomplete, item)
        .pipe(
          tap(_ => this.log(`updated ${this.endpoint} id=${item.id}`)),
          catchError(this.handleError<any>(`update id=${item.id}`))
        );
    }

    delete(id: number) {
      return this.httpClient
        .delete(`${this.urlcomplete}/${id}`)
        .pipe(
          tap(_ => this.log(`deleted ${this.endpoint} id=${id}`)),
          catchError(this.handleError<any>(`delete id=${id}`))
        );
    } 

    public log(message: string) {
      this.messageService.add(`CRUDservice: ${message}`);
    }

    public handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error); // log to console instead
        this.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }

    public readAll(): Observable<T[]>{     
      return this.httpClient.get<T[]>(this.urlcomplete)
      .pipe(
        tap(_ => this.log(`fetched all ${this.endpoint}s from server`)),
        catchError(this.handleError('getAll', []))
      );
    }

    public searchBySubstring(propertyName:string, propertyValue: string): Observable<T[]>{
      return this.httpClient.get<T[]>(`${this.urlcomplete}/${propertyName}/${propertyValue}`)
      .pipe(
        tap(_ => this.log(`fetched ${this.endpoint}s ${propertyName}=${propertyValue}`)),
        catchError(this.handleError('get', []))
      );
    } 
}
