import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class LoginComponent {

  users: any[] = [];

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private tokenService: TokenService,
    private router: Router
  ) {
    userService.getUsers().subscribe(
      (data) => {
        const arr = Object.values(data);
        this.users = arr;
      },
      (error) => {
        console.error('Error fetching jobs:', error);
      }
    );
  }

  loginForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    })
  });

  onSubmit() {
    const email = this.loginForm.get('email')?.value;;
    const password = this.loginForm.get('password')?.value;;

    this.authService.login(email, password).subscribe(
      (data) => {
        this.tokenService.saveToken(data);

        //redirecting based on user role
        switch (this.tokenService.getUser().role) {
          case '1':
            this.router.navigate(['/admin']);
            break;
          case '2':
            this.router.navigate(['/worker']);
            break;
          default:
            console.error('Incorrect user role');
        }

      },
      (err) => {
        console.error(err.message);
      }
    );
  }



}
