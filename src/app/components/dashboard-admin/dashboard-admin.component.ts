import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastService } from '../../services/toast.service';
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
    private toastService: ToastService,
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

    this.toastService.showToast('Form opened successfully!');
  }


}

