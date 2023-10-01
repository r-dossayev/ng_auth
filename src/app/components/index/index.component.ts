import { Component } from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  users:User[];
  constructor(private userService: UserService) {
  }
  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
