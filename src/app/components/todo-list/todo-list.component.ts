import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/Interfaces/task-model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  taskName= '';
  tasks: TaskModel[] = [];
  

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTask();
    console.log(this.tasks);
    
  }

  getTask() {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {    
    const newTask = new TaskModel(this.taskName);
    this.tasks.push(newTask);
    this.taskService.saveTasks(this.tasks);
    this.getTask();
    this.taskName = "";
    console.log(this.tasks);
    
  }

  changeStateTask(index: number) {
    console.log("Change state");
    if(this.tasks[index].completed) {
      this.tasks[index].completed = false;
    } else {
      this.tasks[index].completed = true;
    }

    this.taskService.saveTasks(this.tasks);
    // this.getTask();
    
    
  }

}
