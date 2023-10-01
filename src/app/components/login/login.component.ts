import {Component, Input} from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  users:User[];
  constructor(private userService: UserService) {
  }
  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  newUser:{email:string, password:string, firstName:null, lastName:null};
  error= "";

  login(){
    if (!this.newUser.email || !this.newUser.password){
      this.error = "error";
    }else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.newUser.email)){
      this.error = " un correct email"
    }else if (this.newUser.password.length <6)
    {
        this.error = "password min 6 symbols"
    }else {
      if (this.userService.getUserByEmail(this.newUser.email)){
        this.userService.setAuthUser(this.newUser)
      }
    }
  }
}
