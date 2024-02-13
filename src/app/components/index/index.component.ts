import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";
import {Task} from "../../models/User";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',

})


export class IndexComponent implements OnInit {
  tasks:Task[];
  new_task = {name: 'ssssss', isCompleted: false, description:"", date: ""};
  constructor(private taskService: TaskService,){
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe((users: any) => {
      this.tasks = users.data;
    });
  }
  addTask(){
    const task:Task = {
      _id: "0",
      name: this.new_task.name,
      description: this.new_task.description,
      isCompleted: this.new_task.isCompleted,
      date: new Date()
    };
    console.log(task);
     this.taskService.addTask(task).subscribe((task: Task) => {
      this.tasks.push(task);
    });
    // refresh the list
  }



}
