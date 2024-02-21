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
    // this.users = this.userService.getUsers();
  }

  username:string; password:string; firstName:string|null; lastName:string|null;

  error= "";

  login(){
    if (!this.username || !this.password){
      return  this.error = "пароль и username обьязателно"
    } if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.username))){
      return  this.error = " username ошибка "
    }
    if (this.password.length <6)
      return  this.error = "пароль мин 6  символ"

    this.users.forEach((e)=>{
      if (!(e.username === this.username)){
        return this.error = ""
      }

      this.userService.setAuthUser(e)
      return this.router.navigate(["profile"], )
    })
  return this.error = "пользователь не найден"

  }
}
