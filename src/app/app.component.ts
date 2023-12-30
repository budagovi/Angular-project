import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AdminService } from './services/admin.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-project';

  constructor(
    private authService: AuthService,
    private adminService: AdminService
  ) {
    fetch('http://lukabudagovi-001-site1.atempurl.com/api/User/users')
      .then((response) => response.json())
      .then((data) => console.log(JSON.stringify(data)));

    // fetch("http://lukabudagovi-001-site1.atempurl.com/api/User/jobs")
    //   .then(response => response.json())
    //   .then(data => console.log(JSON.stringify(data)));

    // fetch("http://lukabudagovi-001-site1.atempurl.com/api/Admin/delete-user/89", {
    //   method: "delete"
    // })
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
    this.adminService.deleteUser(81).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
