import { Component } from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',

})
export class IndexComponent {
  users:any[];
  constructor(private userService: UserService, private http: HttpClient){
  }

  ngOnInit() {
    //https://jsonplaceholder.typicode.com/users
    //get users in api
    // this.users = this.userService.getUsers2();
  // @ts-ignore

      this.http.get<any[]>(`https://jsonplaceholder.typicode.com/users`).subscribe((data: any[]) => {
      console.log(data);
      this.users = data;
    });
  }


}
