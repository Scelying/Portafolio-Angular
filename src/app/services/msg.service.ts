import { Injectable } from '@angular/core';
import { Messages } from "../Interfaces/messages";

@Injectable({
  providedIn: 'root',
})
export class MsgService {
  constructor() {}

  msgs = [
    {
      clase: 'otherbubble',
      user: 'Usuario 1',
      message: '¡Hola mundo!',
      dateCreated: '12/ago/2022',
    },
    {
      clase: 'mybubble',
      user: 'Usuario 2',
      message: 'Hello world!',
      dateCreated: '12/ago/2022',
    },
  ];

  getMsgs(): Messages[] {
    const msgList = this.msgs;
    return msgList;
  }
}
