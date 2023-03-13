import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {default as options}  from '../config/options.json';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  subject = new BehaviorSubject(null);
  constructor(private http: HttpClient) {
    
   }
    signIn(data:any): Observable<any> {
     return this.http.post(options.SERVER_URL+'facebook/callback', data);
   }
   setToken(key:string,token:string) {
    localStorage.setItem(key , token)
   }
   getToken() {
    localStorage.getItem('access_token')
   }
   isAuthenticated(){
    return this.subject.value;
  }
}
