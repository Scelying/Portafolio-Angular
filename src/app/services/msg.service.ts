import { Injectable } from '@angular/core';
import { Messages } from '../Interfaces/messages';

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
      dateCreated: '22/12/20',
    },
    {
      clase: 'mybubble',
      user: 'Usuario 2',
      message: 'Hello world!',
      dateCreated: '22/12/02',
    },
  ];

  getMsgs(user: string): Messages[] {
    this.msgs.forEach((element) => {
      if (element.user === user) {
        element.clase = 'mybubble';
      } else {
        element.clase = 'otherbubble';
      }
    });
    const msgList = this.msgs;
    return msgList;
  }
}
