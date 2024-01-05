import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AdminService } from './services/admin.service';
import { Router, RouterOutlet } from '@angular/router';
import { TokenService } from './services/token.service';
import { ScheduleService } from './services/schedule.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-project';

  constructor(
    private authService: AuthService,
    private adminService: AdminService,
    private tokenService: TokenService,
    private ScheduleService: ScheduleService,
    private router: Router
  ) {
    fetch('http://lukabudagovi-001-site1.atempurl.com/api/User/users')
      .then((response) => response.json())
      .then((data) => console.log(JSON.stringify(data)));

    // fetch("http://lukabudagovi-001-site1.atempurl.com/api/User/jobs")
    //   .then(response => response.json())
    //   .then(data => console.log(JSON.stringify(data)));

    // fetch("http://lukabudagovi-001-site1.atempurl.com/api/Admin/delete-user/109", {
    //   method: "delete"
    // })


    tokenService.getUser();
  }


  isLoggedIn() {
    return this.tokenService.getToken();
  }

  logOut() {
    this.tokenService.logOut();
    this.router.navigate(['/login']);
  }

  addJob() {
    this.adminService.addJob('cook').subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  deleteUser() {
    this.adminService.deleteUser(97).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
