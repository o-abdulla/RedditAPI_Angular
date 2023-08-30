import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RedditModel } from '../models/reddit-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http:HttpClient) { }

  url:string = "https://www.reddit.com/r/";  // changes to this for extended

  getPosts(sub:string):Observable<RedditModel>{
    return this.http.get<RedditModel>(`${this.url}${sub}/.json`);   // changes to this for extended
  }
}
