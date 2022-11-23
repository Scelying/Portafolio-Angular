import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { AuthChatService } from '../../../services/auth-chat.service';
import { MsgService } from '../../../services/msg.service';
import { Messages } from '../../../Interfaces/messages';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-web-chat',
  templateUrl: './web-chat.component.html',
  styleUrls: ['./web-chat.component.css'],
})
export class WebChatComponent implements OnInit, AfterViewChecked {
  
  constructor(
    public authService: AuthChatService,
    private msgService: MsgService, 
    private router: Router,
    ) {}
  
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;

  usuario = '';
  listaUsuarios: string[] = [];
  msgs: Messages[] = [];
  messagebox = '';


  ngOnInit(): void {
    this.usuario = this.authService.userName;
    this.msgs = this.msgService.getMsgs(this.usuario);
    this.listaUsuarios = this.authService.users;    
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  sendMessage(): any {
    if (this.messagebox.trim().length !== 0) {
      let newMsg: Messages = {
        clase: 'mybubble',
        user: this.usuario,
        message: this.messagebox,
        dateCreated: `Sent on ${new Date(Date.now()).toLocaleDateString()} at ${new Date(Date.now()).toLocaleTimeString()}`,
      };
      this.msgs.push(newMsg);
      this.messagebox = "";
    }
  }

  scrollToBottom():void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (error) {
      
    }
  }

  exitChat() {
    for (let index = 0; index < this.listaUsuarios.length; index++) {
      if (this.usuario === this.listaUsuarios[index]) {
        this.listaUsuarios.splice(index, 1);
        this.authService.users = this.listaUsuarios;
      }
    }
    this.usuario = '';
    this.router.navigateByUrl("/app-login")
  }
  
}
