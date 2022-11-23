export class Messages {
  public clase: string;
  public message: string;
  public dateCreated: string;
  public user: string;
  constructor(clase: string, msg: string, date: string, user: string){
    this.clase = clase;
    this.message = msg;
    this.dateCreated = date;
    this.user = user;
  }
}