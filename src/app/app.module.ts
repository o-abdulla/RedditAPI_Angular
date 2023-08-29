import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfPostsComponent } from './components/list-of-posts/list-of-posts.component';
import { SinglePostComponent } from './components/single-post/single-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfPostsComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
