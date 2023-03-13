import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from './post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  postDetails:string='';
  constructor(private _snackBar: MatSnackBar, private service:PostService) {}
  createPost() {
    if(!this.postDetails) {
      this._snackBar.open("Please write something in Post", "error");
    }
    else {
      this.service.createPost({post:this.postDetails}).subscribe(res =>{
        console.log(res)
      })
    }
  }

}
