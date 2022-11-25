import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { AuthChatService } from '../../services/auth-chat.service';
import { UserModel } from 'src/app/Interfaces/user-model';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Database, getDatabase, ref, set, onValue } from 'firebase/database';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userInput = '';
  listaUsuarios: string[] = [];
  breakException = {};
  app: FirebaseApp;
  db: Database;

  constructor(private router: Router, public authService: AuthChatService) {
    this.app = initializeApp(environment.firebase);
    this.db = getDatabase(this.app);
  }

  ngOnInit(): void {
    const userRef = ref(this.db, 'users');
    onValue(userRef, (snapshot: any) => {
      const data = snapshot.val();
      for (let name in data) {
        this.listaUsuarios.push(name);
      }
    });
  }

  Login(user: string) {
    if (user == '') {
      alert('Debe ingresar un nombre de usuario');
    } else {
      if (this.listaUsuarios.length >= 5) {
        alert('La sala está llena, inténtelo más tarde');
      } else {
        try {
          this.listaUsuarios.forEach((user) => {
            if (user === this.userInput) {
              throw alert('El usuario ya existe en la sala');
            }
          });
          let newUser: UserModel = {
            userName: this.userInput,
          };
          set(ref(this.db, `users/${newUser.userName}`), newUser);
          this.authService.userName = this.userInput;
          // this.authService.users = this.listaUsuarios;
          this.router.navigateByUrl('/app-web-chat');
        } catch (error) {}
      }
    }
  }
}
