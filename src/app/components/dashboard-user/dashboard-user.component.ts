import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent {


  users: any[] = [];
  scheduleForm!: FormGroup;
  scheduleDate: string ='';
  selectedShift: 'morning' | 'evening' = 'morning';
  

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private toast: ToastService,
  ) {
    this.createForm();
  }

  createForm() {
    this.scheduleForm = this.fb.group({
      date: ['', Validators.required],
      startTime: [''],
      endTime: [''],
      userId: [0]
    });
}
}
}
