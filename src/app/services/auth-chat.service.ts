import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthChatService {
  userName = '';
  users = ['Usuario 1', 'Usuario 2'];

  constructor() { }
}
