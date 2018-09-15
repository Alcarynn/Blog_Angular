import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { UserService } from '../_services/user.service';
import { FormControl } from '@angular/forms';
import { User } from '../classes';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { SharedService } from '../_services/shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	user: User;
	@Output() childForm = new EventEmitter();
	myControl = new FormControl();
	options: User[];
	filteredOptions: Observable<User[]>;


  constructor(
    private userService: UserService,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    this.user = this.sharedService.getUser();
    this.getOptions();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | User>(''),
        map(value => typeof value === 'string' ? value : value.lastname),
        map(name => name ? this._filter(name) : this.options)
      );
  }

  displayFn(option?: User): string | undefined {
    return option ? option.lastname : undefined;
  }
  
  getOptions(): void {
    this.userService.readAll().subscribe(options => this.options = options);
  }

  private _filter(name: string): User[]{
    let results = this.options.filter(option => option.lastname.toLowerCase().indexOf(name.toLowerCase()) === 0);
    return results;
  }

  selectedOption(option: User){
		this.user.friends.push(option);
		this.userService.update(this.user).subscribe();
	
  }

}
