import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountserviceService } from '../createaccount/accountservice.service';
import { BranchserviceService } from '../createbranch/branchservice.service';


@Component({
  selector: 'app-branchlist',
  templateUrl: './branchlist.component.html',
  styleUrls: ['./branchlist.component.css']
})
export class BranchlistComponent implements OnInit {

  branches: Observable<any> | undefined ;

    branchid:number=0;
  constructor(private branchservice: BranchserviceService,private accountservice: AccountserviceService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.branches = this.branchservice.getBranchesList();
  }

  deleteBranch(branchId: number) {
    this.branchservice.deleteBranch(branchId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  branchDetails(branchId: number) {
    this.router.navigate(['/details', branchId]);
  }

  createAccount(branchId: number){
    this.branchid = branchId;
    this.accountservice.setBranchId(branchId);
   
    this.router.navigate(['/branch',branchId,'addaccount'])
  }

}
