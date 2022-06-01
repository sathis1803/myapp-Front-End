import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  submitted = false;

  branchid!: number;
  
  constructor(private accountservice: AccountserviceService, private branchservice: BranchserviceService,
    private router: Router) { }

  ngOnInit(): void {
   this.branchid = this.accountservice.branchId;

  this.branchservice.getBranch(this.branchid)
  .subscribe(
    val => {
      console.log("..val =", val);
      this.account.branch = val;
    },
    error => console.log("in error", error),
    () => console.log(" observable is now completed.")
  );
   
  }

  newBranch(): void {
    this.submitted = false;
    this.account = new Account();
  }

  save() {
    this.accountservice
      .createAccount(this.account).subscribe((data: any) => {
        console.log(data)
        this.account = new Account();
        this.gotoList();
      },
        (error: any) => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/branch/listaccount']);
  }

}


