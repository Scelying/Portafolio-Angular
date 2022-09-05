import { Injectable } from '@angular/core';
import { DatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import * as firebase from 'firebase/app';
import { ChatMessage } from '../Interfaces/message-model';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  user: any;
  chatMessage?: ChatMessage;
  chatMessages?: Observable<ChatMessage[]> | [];
  userName?: Observable<string>;

  constructor(private db: DatabaseModule, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((auth) => {
      if (auth !== undefined && auth !== null) {
        this.user = auth;
      }
    });
  }

  sendMessage(msg: string) {
    const timeStamp = this.getTimeStamp();
    const email = this.user.email;
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message: msg,
      timeSent: timeStamp,
      userName: this.userName,
      email: email,
    });
  }

  getMessages(): Observable<ChatMessage[]>{
    return this.db.list('messages', {
      query: {
        limitToLast: 25,
        orderByKey: true
      }
    })
  }

  getTimeStamp() {
    const now = new Date();
    const date =
      now.getUTCFullYear() +
      '/' +
      (now.getUTCMonth() + 1) +
      '/' +
      now.getUTCDay();
    const time =
      now.getUTCHours() + '/' + now.getUTCMinutes() + '/' + now.getUTCSeconds();
    return date + ' ' + time;
  }
}
