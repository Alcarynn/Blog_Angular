import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../classes';
import { UserService } from '../_services/user.service';
import { UserCrudService } from '../_services/user-crud.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private userCrudService: UserCrudService
    ) { 
          
    }

  ngOnInit() {   
    this.user = new User(); 
    var userid =+this.route.snapshot.paramMap.get('userid');   
    var localUser =  JSON.parse(localStorage.getItem('local_user'));
    
      if(userid !== localUser.id){        
        this.userCrudService.read(userid).subscribe(user => {
          this.user = user;
          this.userService.getFriends(userid).subscribe(friends=> this.user.friends=friends);      
        })}
      else{
        this.user = localUser;
        this.userService.getFriends(userid).subscribe(data=> this.user.friends=data);

    }
  }
  addFriend(){
    var localUser =  JSON.parse(localStorage.getItem('local_user'));
		this.userService.addFriend(localUser.id, this.user).subscribe(data => this.ngOnInit());	
  }

}
