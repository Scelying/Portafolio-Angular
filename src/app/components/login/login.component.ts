import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthChatService } from "../../services/auth-chat.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  userInput = "";
  
  constructor(private router: Router, public authService: AuthChatService) { }

  Login(user: string) {
    if (user == "") {
      alert("Debe ingresar un nombre de usuario")
    } else{
      this.authService.userName = this.userInput;
      this.router.navigateByUrl('/app-web-chat');
    }
  }

}
