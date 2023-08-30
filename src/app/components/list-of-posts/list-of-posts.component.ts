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
  subreddit:string = "aww";  // extended exercise
  status:string = ""; // extended

  constructor(private _postService:RedditService){}

  ngOnInit(){
    this.CallApi();
  }

  // extended
  CallApi():void{
    this.status = "loading";
    this._postService.getPosts(this.subreddit).subscribe((response:RedditModel) => {
      console.log(response);

      this.listOfPosts = response;
      this.listOfPosts.data.children.splice(10) // this shows 1st 10 results (starts at 10 and cuts everything after it)
      this.status = ""; // when its found, delete it
    },(err) => {
      console.log("Cant find subreddit")
      this.status = "Could not find subreddit";
    });


  }
}
