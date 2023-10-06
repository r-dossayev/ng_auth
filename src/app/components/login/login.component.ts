import {Component, Input} from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class LoginComponent {
  users:User[];
  constructor(private userService: UserService, private router:Router) {
  }
  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  email:string; password:string; firstName:string|null; lastName:string|null;

  error= "";

  login(){
    if (!this.email || !this.password){
      return  this.error = "password and email is required"
    } if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))){
      return  this.error = " un correct email"
    }
    if (this.password.length <6)
      return  this.error = "password min 6 symbols"

    this.users.forEach((e)=>{
      if (!(e.email === this.email)){
        return this.error = ""
      }

      this.userService.setAuthUser(e)
      return this.router.navigate(["profile"], )
    })
  return this.error = "user not found"

  }
}
