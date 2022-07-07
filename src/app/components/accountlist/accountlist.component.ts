import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Branch } from '../branch';
import { AccountserviceService } from '../createaccount/accountservice.service';
import { BranchserviceService } from '../createbranch/branchservice.service';

@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css']
})
export class AccountlistComponent implements OnInit {

  accounts: Observable<any> | undefined ;

  constructor(private accountservice: AccountserviceService,private branchservice: BranchserviceService,
    private router: Router,private cookies:CookieService) { }

  ngOnInit(): void {
    const jwtToken = this.cookies.get("jwt_token");
    if(!jwtToken){
      this.router.navigate(['login']);
    }
    this.reloadData();   
  }

  reloadData() {
    this.accounts = this.accountservice.getAccountsList();
  }

  onUpdate(accNo: number,mobileNo: string){
    console.log(accNo);
    this.accountservice.setAccountNo(accNo);
    this.accountservice.setMobileNo(mobileNo);
    this.router.navigate(['home/branch/updateaccount/', accNo]);
  }
  onUpdateStatus(accNo: number,accStatus: boolean){
   
    this.accountservice.updateAccStatus(accNo,accStatus).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  onView(accNo: number){
    this.accountservice.setAccountNo(accNo);
    this.router.navigate(['home/branch/account/view',accNo]);
  }

  onDelete(accNo: number){
    this.accountservice.deleteAccount(accNo).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

}
