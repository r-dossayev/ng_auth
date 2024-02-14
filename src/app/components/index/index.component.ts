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

  selectedTask: Task = { _id: '', name: '', description: '', isCompleted: false, date: new Date() };
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
  deleteTask(id:string){
    this.taskService.deleteTask(id).subscribe((task: Task) => {
      this.tasks = this.tasks.filter((task: Task) => task._id !== id);
    });
  }


  selectTask(task:Task){
    this.selectedTask = task;
  }

  updateTask(){
    this.taskService.updateTask(this.selectedTask).subscribe((task: Task) => {
      this.tasks = this.tasks.map((task: Task) => {
        if (task._id === this.selectedTask._id) {
          task = this.selectedTask;
        }
        return task;
      });
    });
  }

}
