import { Component } from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',

})
export class ProfileComponent {
  users:User[];
  user:User
  constructor(private userService: UserService, private router:Router) {
  }
  ngOnInit() {
    this.users = this.userService.getUsers();
    this.user = this.userService.getAuthUser()
  }

  email:string; password:string; firstName:string|null; lastName:string|null;

  error= "";


}
