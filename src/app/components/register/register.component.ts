import { Component } from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  users:User[];
  constructor(private userService: UserService, private router:Router) {
  }
  ngOnInit() {
    this.users = this.userService.getUsers();
  }
  email:string; password:string; firstName:string|null; lastName:string|null;
  error= "";
  id:number = 1;
  register(){
    if (!this.email || !this.password){
      return  this.error = "error"
    // }else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)){
    //    return  this.error = " un correct email"
    }
    if (this.password.length <6)
      return  this.error = "password min 6 symbols"

      // if (this.userService.getUserByEmail(this.email))
      //   return    this.error = "email is not busy"

        this.userService.addUser({
          "firstName": this.firstName,
          "lastName": this.lastName,
          "email": this.email,
          "password": this.password
        })

        // this.userService.setMessage("success register")
        return this.router.navigate(["home"])

  }
   redirectToLogin(){
     return  this.router.navigate(["home"])
  }
}
