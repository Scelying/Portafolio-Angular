export class TaskModel {
  public name: string;
  public completed: boolean;
  constructor(name: string, completed?: boolean) {
    this.completed = completed ? completed : false;
    this.name = name;
  }
}
