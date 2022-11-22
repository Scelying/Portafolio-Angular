import { Component, OnInit } from '@angular/core';
import { AuthChatService } from '../../../services/auth-chat.service';

@Component({
  selector: 'app-web-chat',
  templateUrl: './web-chat.component.html',
  styleUrls: ['./web-chat.component.css'],
})
export class WebChatComponent implements OnInit {
  user = 'Default';
  message = '';
  dateCreated = '';

  constructor(public authService: AuthChatService) {}

  ngOnInit(): void {
    this.user = this.authService.userName;
  }

  sendMessage(): any {
    if (this.message.trim().length !== 0) {
      const bubbleMessage = document.createElement<"div">('div');
      bubbleMessage.setAttribute("ngClass", "mybubble");
      // bubbleMessage.className = 'mybubble';
      bubbleMessage.innerHTML = `<p style="font-size: smaller; margin: 0px;"> ${this.user} dice: </p> ${this.message}`;
      document.getElementById('msgbox')?.appendChild(bubbleMessage);
      this.message = "";
    }
  }
}
