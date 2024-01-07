import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {  NotificationService  } from '../../services/notification.service';
import { UserService } from "../../services/user.service";
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
    private userService: UserService,
    private fb: FormBuilder,  
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


}
