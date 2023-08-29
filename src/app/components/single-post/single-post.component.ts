import { Component, Input } from '@angular/core';
import { Child, RedditModel } from 'src/app/models/reddit-model';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {
  @Input() DisplayPost:Child = {} as Child
}
