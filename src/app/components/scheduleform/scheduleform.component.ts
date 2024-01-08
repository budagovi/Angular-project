import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { ScheduleService } from '../../services/schedule.service';
import { FormService } from '../../services/form.service';
import { AdminService } from '../../services/admin.service';

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
    private notificationService: NotificationService,
    private scheduleService: ScheduleService
  ) { }

  approveSchedule(id: number): void {
    console.log('Before calling approveSchedule API');
    this.adminService.approveSchedule(id).subscribe(
      {
        next: () => {
          console.log('After successful approval API response');
          this.notificationService.showSuccess('Schedule approved successfully!');
          this.fetchUnapprovedSchedules();
          this.scheduleService.refreshSchedule();
        },
        error: (error) => {
          console.log('Error approving schedule:', error);
          this.notificationService.showError('Error approving schedule!');
        }
      }
    );
    console.log('After calling approveSchedule API');
  }
  
  declineSchedule(id: number): void {
    this.adminService.declineSchedule(id).subscribe(
      {
        next: () => {
          this.notificationService.showInfo('Schedule declined successfully!');
          this.fetchUnapprovedSchedules();
          this.formService.closeForm();
          this.scheduleService.refreshSchedule();
        },
        error: (error) => {
          this.notificationService.showError('Error declining schedule!');
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