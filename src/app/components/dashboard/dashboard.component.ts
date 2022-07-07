import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BranchserviceService } from '../createbranch/branchservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  branchCount!: number;
  accountCount!: number;
  transactionCount!: number;
  constructor(private router: Router, private cookies: CookieService, private branchservice: BranchserviceService) { }

  ngOnInit(): void {
    const jwtToken = this.cookies.get('jwt_token');
    if (!jwtToken) {
      this.router.navigate(['login']);
    } else {
      this.branchservice.getBranchesCount().subscribe((data: any) => {
        console.log(data);
        this.branchCount = data;
      },
        (error: any) => {
          console.log(error);
        });

      this.branchservice.getAccountsCount().subscribe((data: any) => {
        console.log(data);
        this.accountCount = data;
      },
        (error: any) => {
          console.log(error);
        });

      this.branchservice.getTransactionCount().subscribe((data: any) => {
        console.log(data);
        this.transactionCount = data;
      },
        (error: any) => {
          console.log(error);
        });

    }
  }

}
