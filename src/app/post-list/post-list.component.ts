import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../_services/post.service';
import { UserService } from '../_services/user.service';
import { Post, User } from '../classes';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  likedPost: Post;
  posts: Post[];
  parent: Post;
  isComments: boolean;
  
  constructor(
    private postService: PostService, 
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router) {  
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
    };
  }

  ngOnInit() {
      this.parent = new Post();
      var postid =+this.route.snapshot.paramMap.get('postid');   
      this.parent.id = postid;  
      if(postid === 0){    
        this.isComments = false;    
        this.getMyWall();   
    }
    else{
      this.isComments = true;
      this.postService.read(postid).subscribe(data => this.parent = data);
      this.postService.getComments(postid).subscribe(data => this.posts = data);
    }
  }

  delete(post: Post){
    this.postService.delete(post.id).subscribe(data =>{this.ngOnInit()});
    
  }

  like(post: Post){
    this.postService.read(post.id).subscribe(data => {
    this.likedPost = data;
    this.likedPost.likes += 1;
    this.postService.update(this.likedPost).subscribe(data =>{this.ngOnInit()});
  });
  }



  getMyPage(id: number){	
    this.userService.getMyPage(id).subscribe(data => this.posts = data);    
  
  }
  
   getMyWall(){	
    var user: User =  JSON.parse(localStorage.getItem('local_user'));
    this.userService.getMyWall(user.id).subscribe(data => this.posts = data);    
  
  }

}
