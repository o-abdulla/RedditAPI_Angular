import { Component } from '@angular/core';
import { RedditModel } from 'src/app/models/reddit-model';
import { RedditService } from 'src/app/services/reddit.service';

@Component({
  selector: 'app-list-of-posts',
  templateUrl: './list-of-posts.component.html',
  styleUrls: ['./list-of-posts.component.css']
})
export class ListOfPostsComponent {
  listOfPosts:RedditModel = {} as RedditModel;

  constructor(private _postService:RedditService){}

  ngOnInit(){
    this._postService.getPosts().subscribe((response:RedditModel) => {
      console.log(response);

      this.listOfPosts = response;
    })
  }
}
