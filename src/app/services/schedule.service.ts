import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private apiUrl = 'http://lukabudagovi-001-site1.atempurl.com/api/User/dashboard';

  constructor(private http: HttpClient) {}

  getAllSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
  private refreshScheduleSubject: BehaviorSubject<{}> = new BehaviorSubject<{}>({});
  refreshSchedule(): void {
    this.refreshScheduleSubject.next({});
  }
  getRefreshScheduleObservable(): Observable<{}> {
    return this.refreshScheduleSubject.asObservable();
  }
}