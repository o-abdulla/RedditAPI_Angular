import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RedditModel } from '../models/reddit-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http:HttpClient) { }

  url:string = "https://www.reddit.com/r/aww/.json";

  getPosts():Observable<RedditModel>{
    return this.http.get<RedditModel>(this.url);
  }
}
