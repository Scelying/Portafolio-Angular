import { Component, OnInit } from '@angular/core';
import { AuthChatService } from '../../../services/auth-chat.service';

@Component({
  selector: 'app-web-chat',
  templateUrl: './web-chat.component.html',
  styleUrls: ['./web-chat.component.css'],
})
export class WebChatComponent implements OnInit {
  user = "Default";
  message = '';

  constructor(public authService: AuthChatService) {}

  ngOnInit(): void {
    this.user = this.authService.userName;
  }
}
