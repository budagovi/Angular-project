import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})

export class RegisterComponent {

  jobs: any[] = [];

  constructor(private userService: UserService, private authService: AuthService) {
    userService.getJobs().subscribe(
      (data) => {
        const arr = Object.values(data);
        this.jobs = arr;
      },
      (error) => {
        console.error('Error fetching jobs:', error);
      }
    );
  }

  registerForm = new FormGroup({
    firstname: new FormControl('', { nonNullable: true, validators: Validators.required }),
    lastname: new FormControl('', { nonNullable: true, validators: Validators.required }),
    email: new FormControl('', { nonNullable: true, validators: Validators.required }),
    password: new FormControl('', { nonNullable: true, validators: Validators.required }),
    confirmPass: new FormControl('', { nonNullable: true, validators: Validators.required }),
    jobId: new FormControl(0, { nonNullable: true, validators: Validators.required })
  })

  get form() {
    return this.registerForm.controls;
  }

  onSubmit() {

    const firstname = this.registerForm.get('firstname')?.value;
    const lastname = this.registerForm.get('lastname')?.value;
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;
    const jobId = +this.registerForm.get('jobId')!.value;

    console.log(password);
    this.authService.register(firstname, lastname, email, password, jobId)
      .subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.error(err.message);
        }
      );
  }
}
