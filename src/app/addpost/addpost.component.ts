import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../_services/post.service';
import { Post, User } from '../classes';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from '../_services/shared.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  newPost: Post= new Post();

  constructor(
    private postService: PostService, 
    private route: ActivatedRoute,
    private location: Location,
    private sharedService: SharedService) { }

  ngOnInit() {
    var parent = new Post();
    parent.id = +this.route.snapshot.paramMap.get('postid');
    this.newPost.parent = parent;
    this.newPost.user = this.sharedService.getUser();
    console.log(this.newPost.parent);
  }

  add(): void{
    this.postService.create(this.newPost).subscribe(data => {this.location.back()});    
  }

}
