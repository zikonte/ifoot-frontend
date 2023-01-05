import { Injectable } from '@angular/core';
import { User } from './models/user.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  constructor() { }
  user!: User;

  setUser(user: User): void {
    this.user = user;
  }
  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  IsLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}
