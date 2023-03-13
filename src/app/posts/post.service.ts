import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {default as options}  from '../config/options.json';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructHttpHeaders() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    })
    return headers;
  }

  constructor(private http: HttpClient) {

   }
   createPost(data:any): Observable<any> {
    return this.http.post(options.SERVER_URL+'posts', data,{headers:this.constructHttpHeaders()});
  }
}
