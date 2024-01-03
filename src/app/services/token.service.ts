import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})

export class TokenService {
  constructor() { }

  logOut(): void {
    localStorage.clear();
  }

  public saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public getUser(): any {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      const decodedToken = this.decodeToken(token);
      
      return {
        role: decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
        email: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'],
        firstName: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname'],
        lastname: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname'],
        userId: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']
      }
    }
    return {};
  }

  //JWT TOKEN DECODER
  private decodeToken(token: string): any {
    try {
      //console.log(JSON.parse(atob(token.split('.')[1])))
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      console.error('Error decoding JWT token:', e);
      return null;
    }
  }
}