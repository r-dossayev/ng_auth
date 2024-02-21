import { Injectable } from '@angular/core';
import {Observable } from "rxjs";
import {ajax} from "rxjs/internal/ajax/ajax";
import {Task} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  url = "http://localhost:8787/api/";

  getTasks(): Observable<Task[]> {

    return new Observable<any[]>(observer => {
      fetch(this.url +"tasks").then(response => {
        response.json().then(data => {
          observer.next(data);
          observer.complete();
        });
      });
    });

  }
  getTask(id:number): Observable<any[]> {

    return new Observable<any[]>(observer => {
      fetch(this.url +"tasks/"+id).then(response => {
        response.json().then(data => {
          observer.next(data);
          observer.complete();
        });
      });
    });

  }

    addTask(task: any): Observable<Task> {
    let ajax$ = ajax({
      url: this.url + "tasks",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    return new Observable<Task>(observer => {
      ajax$.subscribe((response:any) => {
        observer.next(response.response.data);
        observer.complete();
      });
    });

  }



  updateTask(task:any){
   let ajax$ =  ajax({
      url: this.url + "tasks/"+task._id,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    return new Observable<Task>(observer => {
      ajax$.subscribe((response:any) => {
        observer.next(response.response.data);
        observer.complete();
      });
    });
  }

  deleteTask(id:string) {
    let ajax$ = ajax({
      url: this.url + "tasks/"+id,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return new Observable<Task>(observer => {
      ajax$.subscribe((response:any) => {
        observer.next(response.response.data);
        observer.complete();
      });
    });
  }

}
