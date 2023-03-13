import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { ShowPostComponent } from './show-post/show-post.component';

const routes: Routes = [
  {
    path:"dashboard",
    component:DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"post",
    component:PostsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"showpost",
    component:ShowPostComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
