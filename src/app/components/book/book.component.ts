import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
})
export class BookComponent {

  users:any[];
  constructor(private userService: UserService, private http: HttpClient){
  }

  ngOnInit() {
    //https://jsonplaceholder.typicode.com/users
    //get users in api
    // this.users = this.userService.getUsers2();
    // @ts-ignore

    this.http.get<any[]>(`http://localhost:8787/api/books`).subscribe((data: any) => {
      console.log(data);
      this.users = data.data;
    });
  }
}
