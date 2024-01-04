import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private isFormOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private unapprovedSchedules: any[] = [];

  setUnapprovedSchedules(schedules: any[]): void {
    this.unapprovedSchedules = schedules;
  }

  getUnapprovedSchedules(): any[] {
    return this.unapprovedSchedules;
  }

  getFormState(): Observable<boolean> {
    return this.isFormOpenSubject.asObservable();
  }

  openForm(): void {
    this.isFormOpenSubject.next(true);
  }

  closeForm(): void {
    this.isFormOpenSubject.next(false);
  }
}
