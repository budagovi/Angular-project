import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { passwordsMatcher } from '../../validators/passwordsMatcher.Validator';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, ModalComponent],
})
export class RegisterComponent {

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) { }

  //fetching jobs data 
  jobs: any[] = [];
  fetched = false;
  ngOnInit(): void {
    this.userService.getJobs().subscribe(
      (data) => {
        const arr = Object.values(data);
        this.jobs = arr;
        this.fetched = true;
      },
      (error) => {
        console.error('Error fetching jobs:', error);
      }
    );
  }

  //form
  registerForm = new FormGroup({
    firstname: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    lastname: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)],
    }),
    confirmPass: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, passwordsMatcher],
    }),
    jobId: new FormControl(0, {
      nonNullable: true,
      validators: Validators.required,
    })
  }, { validators: passwordsMatcher });

  get form() {
    return this.registerForm.controls;
  }

  //error message handler
  errorMsg = "";
  showErrorMsg() {
    if (this.form.firstname.touched && this.form.firstname.invalid)
      this.errorMsg = 'Please, enter your first name';
    else if (this.form.lastname.touched && this.form.lastname.invalid)
      this.errorMsg = 'Please, enter your last name';
    else if (this.form.email.touched && this.form.email.invalid)
      this.errorMsg = 'Please, enter valid email address';
    else if (this.form.password.touched && this.form.password.invalid)
      this.errorMsg = 'Password must consist of more than 5 characters';
    else if (this.form.confirmPass.touched && (this.registerForm.errors?.['mismatch'] || this.form.confirmPass.invalid))
      this.errorMsg = 'Passwords do not match';
    else if (this.form.jobId.touched && this.form.jobId.value == 0)
      this.errorMsg = 'Please, select job position';
    else
      this.errorMsg = "";
  }

  //alternative of select's spaceholder
  selectTouched = false;
  onChangeSelect() {
    this.selectTouched = true;
  }

  typeM: string = ""
  showModal: boolean = false;
  loadingState: boolean = false;

  hideModal() {
    this.typeM = '';
    this.showModal = false;
  }

  //submit handler
  onSubmit() {
    this.loadingState = true;

    const firstname = this.registerForm.get('firstname')?.value;
    const lastname = this.registerForm.get('lastname')?.value;
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;
    const jobId = this.registerForm.get('jobId')?.value as number | null;

    this.registerForm.reset();

    setTimeout(() => {

      this.authService
        .register(firstname, lastname, email, password, jobId)
        .subscribe(
          (data) => {
            console.log(data);
            this.typeM = 'register-scs';
            this.showModal = true;
            this.loadingState = false;
          },
          (err) => {
            console.error(err.message);
            this.typeM = 'register-error';
            this.showModal = true;
            this.loadingState = false;
          }
        );
    }, 500)
  }

}
