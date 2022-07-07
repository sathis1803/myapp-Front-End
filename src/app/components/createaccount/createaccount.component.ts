import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from '../account';

import { Branch } from '../branch';
import { BranchserviceService } from '../createbranch/branchservice.service';
import { AccountserviceService } from './accountservice.service';


@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {


  account: Account = new Account();
  onError:boolean = false;
  branchid!: number;

  constructor(private accountservice: AccountserviceService, private branchservice: BranchserviceService,
    private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.account.accNo = this.accountservice.accNo; 
    this.account.mobileNo = this.accountservice.mobileNo;
    const routeParams = this.route.snapshot.paramMap;
    const accNoFromRoute = Number(routeParams.get('accno'));  
    this.branchservice.getBranch(accNoFromRoute).subscribe((data: any)=>{
    this.account.branch = data;
   },
   (error: any)=>{
    console.log(error);
    if(error){
        this.router.navigate(['home/branch/listaccount']);
    }
   })
    // this.branchid = this.accountservice.branchId;
    // this.branchservice.getBranch(this.branchid)
    //   .subscribe(
    //     val => {
    //       console.log("..val =", val);
    //       this.account.branch = val;
    //     },
    //     error => console.log("in error", error),
    //     () => console.log(" observable is now completed.")
    //   );

  }

  onSubmit() {
    
    this.accountservice
      .createAccount(this.account).subscribe((data: any) => {
        console.log(data)
        this.account = new Account();
        this.gotoList();
      },
        (error: any) =>{ 
          console.log(error);
          this.onError = true;
        });

    
  }

  gotoList() {
    this.router.navigate(['home/branch/listaccount']);
  }

}


