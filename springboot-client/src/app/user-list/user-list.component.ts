import { Component, OnInit } from '@angular/core';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { Observable, from } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Observable<User[]>;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  } 
  
  reloadData() {
    this.users = this.userService.getUsersList();
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error)
      );
  }

  userDetails(id: number) {
    this.router.navigate(['details', id]);
  }

}
