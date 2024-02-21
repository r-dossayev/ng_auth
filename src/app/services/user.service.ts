import {Injectable} from '@angular/core';
import {authUser, message, users} from "../data/users";
import {Task, User} from "../models/User";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ajax} from "rxjs/internal/ajax/ajax";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

    // getUsers():Array<User>{
    // //https://jsonplaceholder.typicode.com/users
    // return  users;
    // }
    //
  url = "http://localhost:8787/api/";

  addUser(user: User){
   let data = { ...user, "title": user.firstName+" "+user.lastName, }
    let ajax$ = ajax({
      url: this.url + "register",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return new Observable<User>(observer => {
      ajax$.subscribe((response:any) => {
        observer.next(response.response.data);

        observer.complete();
      });
    });

    }

    addUSerToLocalStorage(user:User):Observable<any>{

      return new Observable<any>(observer => {
        localStorage.setItem('authUser', JSON.stringify(user));
        observer.next(user);
        observer.complete();
      });
    }
  getUserByEmail(email:string):User{
    return users.find((user) => user.username === email)!;

  }
  getAuthUser(){
    return authUser[authUser.length-1]
  }
  setAuthUser(user:User){
    authUser.push(user)
  }
  getMessage(){
    return message
  }
  setMessage(mes:string){
  message.push(mes)
  }

  apiUrl = 'https://jsonplaceholder.typicode.com';



  getUsers2(): Observable<any[]> {
  // @ts-ignore
    const http = new HttpClient();
    return http.get<any[]>(`${this.apiUrl}/users`);
  }
  getUsers(): Observable<any[]> {
    let url = "http://localhost:8787/api/tasks";

    return new Observable<any[]>(observer => {
      fetch(url).then(response => {
        response.json().then(data => {
          observer.next(data);
          observer.complete();
        });
      });
    });

  }

  // getPostById(id: number): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/posts/${id}`);
  // }
  //
  // addPost(post: any): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/posts`, post);
  // }
  //
  // updatePost(id: number, post: any): Observable<any> {
  //   return this.http.put<any>(`${this.apiUrl}/posts/${id}`, post);
  // }
  //
  // deletePost(id: number): Observable<any> {
  //   return this.http.delete<any>(`${this.apiUrl}/posts/${id}`);
  // }

}
