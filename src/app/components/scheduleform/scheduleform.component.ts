import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { ScheduleService } from '../../services/schedule.service';
import { FormService } from '../../services/form.service';
import { AdminService } from '../../services/admin.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scheduleform',
  templateUrl: './scheduleform.component.html',
  styleUrls: ['./scheduleform.component.css'],
})
export class ScheduleformComponent implements OnInit {

  unapprovedSchedules: any[] = [];

  ngOnInit(): void {
    this.formService.getFormState().subscribe(isFormOpen => {
      console.log('Is Form Open:', isFormOpen);
      if (isFormOpen) {
        this.fetchUnapprovedSchedules();
      }
    });
  }

  constructor(
    private formService: FormService,
    private adminService: AdminService,
    private toastService: ToastService,
    private scheduleService: ScheduleService
  ) {}

  approveSchedule(id: number): void {
    console.log('Before calling approveSchedule API');
    this.adminService.approveSchedule(id).subscribe(
      {
        next: (response) => {
          console.log('After successful approval API response');
          this.toastService.showSuccess('Schedule approved successfully!');
          this.fetchUnapprovedSchedules();
          this.scheduleService.refreshSchedule();
        },
        error: (error) => {
          console.log('Error approving schedule:', error);
          this.toastService.showError('Error approving schedule!');
        }
      }
    );
    console.log('After calling approveSchedule API');
  }

  declineSchedule(id: number): void {
    this.adminService.declineSchedule(id).subscribe(
      {
        next: (response) => {
          this.toastService.showInfo('Schedule declined successfully!');
          this.fetchUnapprovedSchedules();
          this.formService.closeForm();
          this.scheduleService.refreshSchedule();
        },
        error: (error) => {
          this.toastService.showError('Error declining schedule!');
          console.log(error);
        }
      }
    );
  }

  closeForm() {
    this.formService.closeForm();
  }

  private fetchUnapprovedSchedules(): void {
    this.unapprovedSchedules = this.formService.getUnapprovedSchedules();
  }
}
