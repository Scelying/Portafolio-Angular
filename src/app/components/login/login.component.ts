import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthChatService } from '../../services/auth-chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userInput = '';
  listaUsuarios = [];
  breakException = {};

  constructor(private router: Router, public authService: AuthChatService) {}

  Login(user: string) {
    if (user == '') {
      alert('Debe ingresar un nombre de usuario');
    } else {
      if (this.authService.users.length >= 10) {
        console.log(this.authService.users.length);
        
        alert('La sala está llena, inténtelo más tarde');
      } else {
        try {
          this.authService.users.forEach((user) => {
            if (user === this.userInput) {
              console.log(user);
              throw alert('El usuario ya existe en la sala');
            }
          });
          this.authService.userName = this.userInput;
          this.authService.users.push(this.userInput);
          this.router.navigateByUrl('/app-web-chat');
        } catch (error) {}
      }
    }
  }
}
