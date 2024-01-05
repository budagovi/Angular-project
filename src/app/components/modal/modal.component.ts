import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [RouterLink]
})
export class ModalComponent {

  constructor(
    private router: Router
  ) { }

  @Input() modalType: string = "";
  @Output() dataEvent = new EventEmitter();

  hideModal() {
    this.dataEvent.emit();
  }

  navigate(link:string) {
    this.router.navigate([link]);
  } 

  sign = "";
  msg = "";
  link: string | undefined = "";
  color = "";
  linkMsg = "";

  ngOnInit(): void {

    console.log(this.modalType);
    if (this.modalType === "register-scs") {
      this.sign = "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
      this.msg = "Account created successfully";
      this.link = "/sign-in";
      this.linkMsg = "Continue to Login";
      this.color = "#00b990";
    }
    else if (this.modalType === "register-error") {
      this.sign = "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"
      this.msg = "Whoops, email has been already used";
      this.link = undefined;
      this.linkMsg = "Sign up again";
      this.color = "red";
    }
  }
}
