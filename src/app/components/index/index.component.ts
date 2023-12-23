import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {HttpClient} from "@angular/common/http";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {UserState} from "../../store/user.reducer";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',

})


export class IndexComponent implements OnInit {
  users:any[];
  articles$:  Observable<number>;
  constructor(private userService: UserService, private http: HttpClient, private store: Store<UserState>){
  }



  ngOnInit() {


    //   this.http.get<any[]>(`https://jsonplaceholder.typicode.com/users`).subscribe((data: any[]) => {
    //   // console.log(data);
    //   this.users = data;
    // });
    // const
    console.log("this.users")
    //@ts-ignore
    // console.log(this.store._value)
    // console.log(this.store.select((store) => store.users))
    // @ts-ignore
    // console.log(this.store.source._value.users.users)
    this.articles$ = this.store.select((store) =>  store.count);
    // this.store.source._value.users.count = 987654;
    // this.articles$ = this.store.source._value.users.count;
    // @ts-ignore
    // console.log(this.store.pipe(select((store) => store.users.count)))
    // this.articles$ = this.store.pipe(select((store) => store.count));

    console.log("this.articles$")
    console.log(this.articles$)
  }


}
