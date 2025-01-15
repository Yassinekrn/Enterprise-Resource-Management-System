import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private isAuthenticated = false;
  
    login(username: string, password: string): boolean {
      if (username === 'test' && password === 'test') {
        this.isAuthenticated = true;
        return true;
      }
      return false;
    }
  
    logout() {
      this.isAuthenticated = false;
    }
  
    isauthenticated(): boolean {
      return this.isAuthenticated;
    }
  }