import {Component} from '@angular/core';
import {Task, User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',

})
export class RegisterComponent {
  users: User[];

  constructor(private userService: UserService, private router: Router) {
  }

  // ngOnInit() {
  //   this.users = this.userService.getUsers();
  // }
  username: string;
  password: string;
  firstName: string | null;
  lastName: string | null;
  error = "";
  id: number = 1;

  register() {
    if (!this.username || !this.password) {
      return this.error = "пароль и емайл обьезятелно"
    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.username))) {
      return this.error = " un correct username"
    }
    if (this.password.length < 6)
      return this.error = "пароль мин 6  символ"

    const user =
      {
        "firstName": this.firstName, "lastName": this.lastName,
        "username": this.username, "password": this.password
      }

    this.userService.addUser(user).subscribe();

    return this.router.navigate(["home"])

  }

  redirectToLogin() {
    return this.router.navigate(["home"])
  }
}
