import { Injectable } from '@angular/core';
import {users, authUser, message, userData} from "../data/users";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

    getUsers():Array<User>{
    return users;
    }


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

}
