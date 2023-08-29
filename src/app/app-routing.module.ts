import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfPostsComponent } from './components/list-of-posts/list-of-posts.component';

const routes: Routes = [
  { path:"Reddit", component: ListOfPostsComponent, pathMatch: "full" },
  { path: "", redirectTo: "/Reddit", pathMatch: "full" },
  { path: "**", redirectTo: "/Reddit", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
