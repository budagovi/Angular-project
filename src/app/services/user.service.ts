import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const authUrl = "http://lukabudagovi-001-site1.atempurl.com/api/User/";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(authUrl + 'users');
  }

  getJobs() {
    return this.http.get(authUrl + 'jobs');
  }
}