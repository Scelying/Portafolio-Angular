import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/Interfaces/task-model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private taskService: TaskService) { }
  taskName = '';
  tasksList: TaskModel[] = [];

  ngOnInit(): void {
    this.getTask();
  }

  getTask() {
    this.tasksList = this.taskService.getTasks();
    console.log(this.tasksList);
  }

  addTask() {
    const newTask = new TaskModel(this.taskName);
    this.tasksList.push(newTask);
    this.taskService.saveTasks(this.tasksList);
    this.getTask();
    this.taskName = "";
  }

  changeStateTask() {
    this.taskService.saveTasks(this.tasksList);
  }

  deleteTask(i: number, taskName: string) {
    const confirmacion = confirm(`¿Desea eliminar la tarea: "${taskName}"?`)

    if (!confirmacion) {
      return;
    }

    this.tasksList.splice(i, 1);
    this.taskService.saveTasks(this.tasksList);
  }

  // deleteDialog(i: number, name: string): void {
  //   this.dialog.open(TodoListComponent);

  // }

}
