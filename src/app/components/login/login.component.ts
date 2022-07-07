import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../auth.service';
import { BranchAdmin } from '../branchAdmin';
import { BranchserviceService } from '../createbranch/branchservice.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  branchAdmin: BranchAdmin = new BranchAdmin();
  changePassword:boolean=false;
  newPassword:string="";
  username!: string;
  onError!: boolean;
  isLoading!: boolean;
  errorMessage: string = "";
  timer: any;

  constructor(private branchservice: BranchserviceService,
    private router: Router, private authService: Auth, private cookies: CookieService) { }

  ngOnInit(): void {

  }

  onChangePassword(){
    this.changePassword = true;
  }

  onSubmit() {
    if(this.changePassword && this.branchAdmin.userName != null && this.branchAdmin.password != null && this.newPassword != null){
      this.branchservice.changePassword(this.branchAdmin.userName,this.branchAdmin.password,this.newPassword).subscribe((data: any)=>{
        console.log(data);
      },(error: any) => {
        console.log(error);
        this.errorMessage = error.error.errorMessage;
          this.setPostData(this.errorMessage);
          this.timer = setTimeout(this.toggleLoading.bind(this), 2000);
    });
    }else{
    if (this.branchAdmin.userName != null && this.branchAdmin.password != null) {
      this.branchservice
        .checkBranchAdmin(this.branchAdmin.userName, this.branchAdmin.password).subscribe((data: any) => {
          console.log(data)
          if (data == null) {

          } else {
            const requestBody = { userName: this.branchAdmin.userName, password: this.branchAdmin.password }
            this.authService.generateToken(requestBody).subscribe((data) => {
              const parsedData = JSON.parse(data)
              this.cookies.set('jwt_token', parsedData.JWT, { expires: 30 })
              console.log(parsedData)

              this.router.navigate(['home']);
            });
          }

        }, (error: any) => {
          console.log(error);
          this.errorMessage = error.error.errorMessage;
          this.setPostData(this.errorMessage);
          this.timer = setTimeout(this.toggleLoading.bind(this), 2000);
        })
    }else{
         this.onError= true;
    }
  }
  }

  onChange() {
    this.router.navigate(['signup']);
  }

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }

  setPostData(data: any) {
    this.errorMessage = data;
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.isLoading = false;
  }

}
