import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/Interfaces/task-model';
import { TaskService } from 'src/app/services/task.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  constructor(private taskService: TaskService, public dialog: MatDialog) {}

  taskName = '';
  tasksList: TaskModel[] = [];

  ngOnInit(): void {
    this.getTask();
  }

  getTask() {
    this.tasksList = this.taskService.getTasks();
  }

  addTask() {
    const newTask = new TaskModel(this.taskName);
    this.tasksList.push(newTask);
    this.taskService.saveTasks(this.tasksList);
    this.getTask();
    this.taskName = '';
  }

  changeStateTask() {
    this.taskService.saveTasks(this.tasksList);
  }

  deleteTask(i: number) {
    this.tasksList.splice(i, 1);
    this.taskService.saveTasks(this.tasksList);
  }

  deleteDialog(index: number, taskName: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        message: `¿Desea eliminar la tarea: "${taskName}" `,
        index: index,
      },
    });

    dialogRef.afterClosed().subscribe((res) => {
      res
        ? this.deleteTask(index)
        : console.log(`Task "${taskName}" No deleted!`);
    });
  }
}
