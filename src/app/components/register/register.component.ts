import { Component } from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',

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
      return  this.error = "пароль и емайл обьезятелно"
    } if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))){
       return  this.error = " un correct email"
    }
    if (this.password.length <6)
      return  this.error = "пароль мин 6  символ"

     this.users.forEach((e)=>{
       if (!(e.email === this.email)){
         return this.error = ""
       }
       return this.error = "email занято"
     })

        this.userService.addUser({
          "firstName": this.firstName,
          "lastName": this.lastName,
          "email": this.email,
          "password": this.password
        })


        return this.router.navigate(["home"])

  }
   redirectToLogin(){
     return  this.router.navigate(["home"])
  }
}
