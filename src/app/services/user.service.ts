import { Injectable } from '@angular/core';
import {users, authUser, message, userData} from "../data/users";
import {User} from "../models/User";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

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


  addUser(user: User){
    users.push(user)

    }
  getUserByEmail(email:string):User{
    return users.find((user) => user.email === email)!;

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
  getUsers(): Array<User> {
    return users;
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
