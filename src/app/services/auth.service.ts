import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

const authUrl = "http://lukabudagovi-001-site1.atempurl.com/api/User/";

@Injectable({
  providedIn: 'root'
})

export class AuthService  {

  constructor(private http: HttpClient) { }

  // Sign in handler
  login(email: string, password: string): Observable<any> {
    return this.http.post(authUrl + 'login/json', {
      email,
      password
    }, 
    {
      headers: {
        "Content-type": 'application/json'
      }
    });
  }

  //Sign up handler
  register(firstName: string | undefined, lastName:string | undefined, email: string | undefined, password: string | undefined, jobId:number | null): Observable<any> {
    return this.http.post('http://lukabudagovi-001-site1.atempurl.com/api/User/register', {
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "password": password,
      "jobId": jobId
    }, {
      headers: {
        "Content-type": 'application/json'
      }
    });
  }
}
