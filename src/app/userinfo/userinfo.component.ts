import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../classes';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
    ) { 
      var userid =+this.route.snapshot.paramMap.get('userid');
      this.userService.read(userid).subscribe(data => this.user = data);
    }

  ngOnInit() {    
   ;
  }

}
