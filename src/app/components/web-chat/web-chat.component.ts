import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-web-chat',
  templateUrl: './web-chat.component.html',
  styleUrls: ['./web-chat.component.css'],
})
export class WebChatComponent {
message = "";

  constructor(private chat: ChatService) {}

  send(){
    this.chat.sendMessage(this.message)
  }

  handleSubmit(event: any) {
    this.send();
  }
}
