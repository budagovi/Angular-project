import { Component } from '@angular/core';
import {  NotificationService  } from '../../services/notification.service';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})

export class DashboardAdminComponent {

  selectedSchedule: any;
  isFormOpen = false;
  constructor(
    private notificationService: NotificationService,
    public FormService: FormService
  ) { }


  openScheduleApprovalForm() {
    if (!this.isFormOpen) {

      this.FormService.openForm();

      this.isFormOpen = true;
    } else {
      this.FormService.closeForm();

      this.isFormOpen = false;
    }

    this.notificationService.showNotification('Pending Schedules Opened successfully!');
  }

  request = this.FormService.getUnapprovedSchedules();
  numRequests = this.request.length


}
