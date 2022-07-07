import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Account } from '../account';
import { AccountserviceService } from '../createaccount/accountservice.service';
import { User } from '../user';

@Component({
  selector: 'app-viewaccount',
  templateUrl: './viewaccount.component.html',
  styleUrls: ['./viewaccount.component.css']
})
export class ViewaccountComponent implements OnInit {

  account: Account = new Account();
  user: User = new User();
  errorMessages!: string;
  isLoading:boolean=false;
  isLoadingSuccess:boolean = false;
  timer:any;
  successMessage!:string;

  constructor(private accountservice: AccountserviceService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.account.accNo = this.accountservice.accNo; 
    this.account.mobileNo = this.accountservice.mobileNo;
    const routeParams = this.route.snapshot.paramMap;
    const accNoFromRoute = Number(routeParams.get('accno'));  
    this.accountservice.getAccountById(accNoFromRoute).subscribe((data: any)=>{
    this.account = data;
    this.user.account= this.account;

   },
   (error: any)=>{
    if(error){
        this.router.navigate(['branch/listaccount']);
    }
   })
  }

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }
  
  toggleLoadingSuccess() {
    this.isLoadingSuccess = !this.isLoadingSuccess;
  }

  setPostData(data: any) {
    this.errorMessages = data;
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.isLoading = false;
  }

  setPostDataSuccess(data: any) {
    this.successMessage = data;
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.isLoadingSuccess = false;
  }

  onGenerate() {
    this.accountservice.generateUser(this.user).subscribe((data: any) => {
      console.log(data)

      this.successMessage = data;
      console.log("dummy");
      this.setPostDataSuccess(this.successMessage);
      this.errorMessages = "";
        this.timer = setTimeout(this.toggleLoadingSuccess.bind(this), 3000);
  
    },
      (error: HttpErrorResponse) =>{       
        const obj = JSON.parse(error.error);
        this.errorMessages = obj.errorMessage;
        this.successMessage = "";
        this.setPostData(this.errorMessages);
        this.timer = setTimeout(this.toggleLoading.bind(this), 3000);
          
        }
    );
  }

}
