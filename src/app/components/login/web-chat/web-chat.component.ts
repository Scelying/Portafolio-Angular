import { Component, OnInit } from '@angular/core';
import { AuthChatService } from '../../../services/auth-chat.service';
import { MsgService } from '../../../services/msg.service';
import { Messages } from '../../../Interfaces/messages';

@Component({
  selector: 'app-web-chat',
  templateUrl: './web-chat.component.html',
  styleUrls: ['./web-chat.component.css'],
})
export class WebChatComponent implements OnInit {
  constructor(
    public authService: AuthChatService,
    private msgService: MsgService, 
  ) {}

  usuario = '';
  msgs: Messages[] = [];
  messagebox = '';


  ngOnInit(): void {
    this.usuario = this.authService.userName;
    this.msgs = this.msgService.getMsgs();
  }

  sendMessage(): any {
    if (this.messagebox.trim().length !== 0) {
      let newMsg: Messages = {
        clase: 'mybubble',
        user: this.usuario,
        message: this.messagebox,
        dateCreated: '12/ago/2022',
      };
      this.msgs.push(newMsg);
      document.getElementById("chatroom")?.scroll(0, 500);
      this.messagebox = "";
    }
  }
  
}
