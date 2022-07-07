import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BranchAdmin } from '../branchAdmin';
import { BranchserviceService } from '../createbranch/branchservice.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  onError: boolean = false;
  isLoading!: boolean;
  isuccessLoading!: boolean;
  errorMessage: string = "";
  successMessage: string = "";
  timer: any;

  constructor(private branchservice: BranchserviceService, private router: Router) { }

  branchadmin: BranchAdmin = new BranchAdmin();

  ngOnInit(): void {
  }

  onChanges() {
    this.router.navigate(['login']);
  }

  onSubmit() {
    if (this.branchadmin.firstName != null && this.branchadmin.lastName != null && this.branchadmin.gmail != null && this.branchadmin.role != null && this.branchadmin.userName != null && this.branchadmin.password != null) {
      this.branchservice.createBranchAdmin(this.branchadmin).subscribe((data: any) => {
        console.log(data)

        this.branchadmin = new BranchAdmin();
        this.router.navigate(['login']);


      },
        (error: any) => {
          console.log(error);
          this.errorMessage = error.error.errorMessage;
          console.log(this.errorMessage, "///////////")
          this.setPostData(this.errorMessage);
          this.timer = setTimeout(this.toggleLoading.bind(this), 3000);

        });
    } else {
      this.onError = true;
    }
  }

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }

  toggle1Loading() {
    this.isuccessLoading = !this.isuccessLoading;
  }

  setPostData(data: any) {
    this.errorMessage = data;
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.isLoading = false;
  }

  setPostData1(data: any) {
    this.successMessage = data;
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.onError = false;
    this.isuccessLoading = false;
  }

}
