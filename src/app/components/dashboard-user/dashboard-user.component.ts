import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';
import { UserService } from '../../services/user.service';
import { ScheduleComponent } from "../schedule/schedule.component";
import { TokenService } from '../../services/token.service'; 

@Component({
    selector: 'app-dashboard-user',
    templateUrl: './dashboard-user.component.html',
    styleUrls: ['./dashboard-user.component.css'],
    standalone: true,
    imports: [
        ReactiveFormsModule,
        FormsModule,
        ScheduleComponent
    ]
})
export class DashboardUserComponent implements OnInit {
  users: any[] = [];
  scheduleForm!: FormGroup;
  scheduleDate: string = '';
  selectedShift: 'morning' | 'evening' = 'morning';

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.scheduleForm = this.fb.group({
      date: [''],
      startTime: [''],
      endTime: [''],
      userId: [0]
    });
  }

  setShift(shift: 'morning' | 'evening') {
    this.selectedShift = shift;

    const shiftTimes = {
      morning: { startTime: '10:00', endTime: '18:00' },
      evening: { startTime: '18:00', endTime: '04:00' }
    };

    this.scheduleForm.patchValue(shiftTimes[shift]);
  }



  addSchedule() {
    const user = this.tokenService.getUser();

    if (!user) {
      console.error('User ID is not present or has an invalid format in the decoded token.');
      return;
    }

    const startDate = new Date(`${this.scheduleDate}T${this.scheduleForm.value.startTime}`);
    const endDate = new Date(`${this.scheduleDate}T${this.scheduleForm.value.endTime}`);

    const hoursToAdd = this.selectedShift === 'morning' ? 8 : 7;
    endDate.setHours(startDate.getHours() + hoursToAdd);

    const startTime = startDate.toISOString();
    const endTime = endDate.toISOString();

    const scheduleData = {
      startTime,
      endTime,
      userId: user.userId
    };

   

    this.userService.addScheduleRequest(scheduleData).subscribe({
      next: (response) => {
        console.log('Schedule added successfully:', response);
        this.notificationService.showSuccess('Schedule added successfully!');
      },
      error: (error) => {
        console.error('Error adding schedule:', error);
      }
    });
  }
}
