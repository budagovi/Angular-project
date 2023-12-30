import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiAdminUrl = "http://lukabudagovi-001-site1.atempurl.com/api/Admin/";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  //approve schedule request

  //change user role
  changeUserRole(userId: number, newRoleId: number) {
    return this.http.post(apiAdminUrl + "change-user-role", {
      "userId": userId,
      "newRoleId": newRoleId
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    })
  }
  
  //add new job
  addJob(jobTitle: string) {
    return this.http.post(apiAdminUrl + "add-new-job", {
      "title": jobTitle
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  //delete existing user
  deleteUser(userId: number) {
    return this.http.delete(apiAdminUrl + "delete-user/" + userId, {
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  //delete existing job
  deleteJob(jobId: number) {
    return this.http.delete(apiAdminUrl + "delete-job/" + jobId, {
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  //delete schedule item
}
