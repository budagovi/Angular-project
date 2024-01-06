import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiAdminUrl = "http://lukabudagovi-001-site1.atempurl.com/api/Admin/";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://lukabudagovi-001-site1.atempurl.com/api/Admin/';

  constructor(private http: HttpClient) { }

  // change user role
  changeUserRole(userId: number, newRoleId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}change-user-role`, {
      "userId": userId,
      "newRoleId": newRoleId
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  // add new job
  addJob(jobTitle: string): Observable<any> {
    return this.http.post(`${this.apiUrl}add-new-job`, {
      "title": jobTitle
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  // delete existing user
  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}delete-user/${userId}`, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  // delete existing job
  deleteJob(jobId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}delete-job/${jobId}`, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  
  // approve schedule request
  approveSchedule(scheduleId: number): Observable<any> {
    const params = { scheduleId: scheduleId.toString() };
    return this.http.post(`${this.apiUrl}approve-schedule-request`, null, { params });
  }

    // delete schedule item
  declineSchedule(scheduleId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}delete-schedule/${scheduleId}`);
  }

}
