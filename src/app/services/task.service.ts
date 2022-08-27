import { Injectable } from '@angular/core';
import { TaskModel } from '../Interfaces/task-model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  KEY_LOCAL_STORAGE = 'todo_list';

  constructor() {}

  getTasks(): TaskModel[] {
    return JSON.parse(localStorage.getItem(this.KEY_LOCAL_STORAGE) || '[]');
  }

  saveTasks(tasks: TaskModel[]) {
    localStorage.setItem(this.KEY_LOCAL_STORAGE, JSON.stringify(tasks));
  }
}
