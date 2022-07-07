import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Transaction } from '../transaction';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transaction: Transaction = new Transaction();
  transAmount!: number;
  depositCard: boolean = false;
  withdrawCard: boolean = false;
  depositMessage: boolean = false;
  cardhead: string = "";
  errorMessage: string = "";
  successMessage: string = "";
  timer!:any;

  constructor(private transservice: TransactionService, private route: Router, private cookies: CookieService) { }

  ngOnInit(): void {
    const jwtToken = this.cookies.get('jwt_token');
    if (!jwtToken) {
      this.route.navigate(['login']);
    }

  }

  onDepositeLink() {
    this.cardhead = 'Deposit';
    this.depositCard = true;
    this.withdrawCard = false;
  }

  onWithdrawLink() {
    this.cardhead = 'Withdraw';
    this.depositCard = false;
    this.withdrawCard = true;
  }

  // handleError(error: any) {
  //   console.log("//////", error.error.errorMessage)
  //   this.errorMessage = error.error.errorMessage;
  //   console.log(this.errorMessage);
  //   this.depositMessage = true;
  //   console.log(this.depositMessage,"depositMessage");
  //   // setTimeout(() => {
  //   //   this.errorMessage = "";
  //   //   this.depositMessage = false;      
  //   // }, 4000);
  // }


  onDeposit() {
    
    this.transaction.transType = true;
    this.transservice.updateDeposit(this.transaction.accNo, this.transaction.transAmount, this.cardhead).subscribe((data: any) => {
      console.log(data)
      if(data!=null){
        this.successMessage = "Sucessfully Deposited...";
        this.errorMessage = "";
        this.setPostDataSuccess(this.successMessage);
        this.timer = setTimeout(this.toggleLoadingSuccess.bind(this), 2000);
      }
      this.transaction = new Transaction();

    },
      (error: any) => {console.log(error)
        this.successMessage="";
      this.errorMessage = error.error.errorMessage;
      this.setPostData(this.errorMessage);
      this.timer = setTimeout(this.toggleLoading.bind(this), 2000);
      //this.depositMessage=true;
      //this.handleError
      })

  }

  toggleLoading(){
    this.depositMessage = !this.depositMessage;
  }

  setPostData(data:any){
    this.errorMessage = data;
    if(this.timer) {
        clearTimeout(this.timer);
    }
    this.depositMessage = false;
}

toggleLoadingSuccess(){
  this.depositMessage = !this.depositMessage;
}

setPostDataSuccess(data:any){
  this.successMessage = data;
  if(this.timer) {
      clearTimeout(this.timer);
  }
  this.depositMessage = false;
}

  onWithdraw() {
    this.transaction.transType = false;
    this.transservice.updateWithdraw(this.transaction.accNo, this.transaction.transAmount, this.cardhead).subscribe((data: any) => {
      console.log(data)
      if(data!=null){
        this.successMessage = "Sucessfully Withdrawn...";
        this.errorMessage = "";
        this.setPostDataSuccess(this.successMessage);
        this.timer = setTimeout(this.toggleLoadingSuccess.bind(this), 2000);
      }
      this.transaction = new Transaction();
      this.transAmount = this.transaction.transAmount;
     
    },
    (error: any) => {console.log(error)
      this.errorMessage = error.error.errorMessage;
      this.successMessage="";
      this.setPostData(this.errorMessage);
      this.timer = setTimeout(this.toggleLoading.bind(this), 2000);
      //this.depositMessage=true;
      //this.handleError
      })
  }


}


