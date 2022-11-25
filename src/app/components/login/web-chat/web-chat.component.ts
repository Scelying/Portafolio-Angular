import {
  Component,
  OnInit,
  AfterViewChecked,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { AuthChatService } from '../../../services/auth-chat.service';
// import { MsgService } from '../../../services/msg.service';
import { Messages } from '../../../Interfaces/messages';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  Database,
  getDatabase,
  ref,
  set,
  onValue,
  remove,
} from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-web-chat',
  templateUrl: './web-chat.component.html',
  styleUrls: ['./web-chat.component.css'],
})
export class WebChatComponent implements OnInit, AfterViewChecked {
  usuario = '';
  listaUsuarios: string[] = [];
  msgs: Messages[] = [];
  messagebox = '';
  app: FirebaseApp;
  db: Database;

  constructor(
    public authService: AuthChatService,
    // private msgService: MsgService,
    private router: Router
  ) {
    this.app = initializeApp(environment.firebase);
    this.db = getDatabase(this.app);
  }

  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;

  ngOnInit(): void {
    this.usuario = this.authService.userName;
    // this.listaUsuarios = this.authService.users;
    const userRef = ref(this.db, 'users');
    onValue(userRef, (snapshot: any) => {
      this.listaUsuarios = [];
      const data = snapshot.val();
      for (let name in data) {
          this.listaUsuarios.push(name);
      }
    });

    const chatRef = ref(this.db, 'chats');
    onValue(chatRef, (snapshot: any) => {
      const data = snapshot.val();
      for (let id in data) {
        if (!this.msgs.map((chat) => chat.id).includes(id)) {
          this.msgs.push(data[id]);
        }
      }
      this.msgs.forEach((element) => {
        if (element.user === this.usuario) {
          element.clase = 'mybubble';
        } else {
          element.clase = 'otherbubble';
        }
      });
    });
  }

  // Necessary to sroll function
  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  sendMessage(): any {
    if (this.messagebox.trim().length !== 0) {
      let newMsg: Messages = {
        id: uuidv4(),
        clase: 'mybubble',
        user: this.usuario,
        message: this.messagebox,
        timeStamp: `Sent on ${new Date(
          Date.now()
        ).toLocaleDateString()} at ${new Date(
          Date.now()
        ).toLocaleTimeString()}`,
      };
      set(ref(this.db, `chats/${newMsg.id}`), newMsg);
      // this.msgs.push(newMsg);
      this.messagebox = '';
    }
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop =
        this.myScrollContainer.nativeElement.scrollHeight;
    } catch (error) {}
  }

  exitChat() {
    // for (let index = 0; index < this.listaUsuarios.length; index++) {
    //   if (this.usuario === this.listaUsuarios[index]) {
    //     // this.listaUsuarios.splice(index, 1);
    //     // this.authService.users = this.listaUsuarios;
    //   }s
    // }
    remove(ref(this.db, `users/${this.usuario}`));
    this.usuario = '';
    this.router.navigateByUrl('/app-login');
  }
}
