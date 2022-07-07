import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction/transaction.service';

@Component({
  selector: 'app-transactionlist',
  templateUrl: './transactionlist.component.html',
  styleUrls: ['./transactionlist.component.css']
})
export class TransactionlistComponent implements OnInit {

  transactions: Observable<any> | undefined ;
  constructor(private transservice: TransactionService,private cookies:CookieService,private router:Router) { }

  ngOnInit(): void {
  
   const jwtToken = this.cookies.get('jwt_token');
    if(!jwtToken){
      this.router.navigate(['login']);
    }else{
      this.loadData();
    }
  }


  loadData(){
    this.transactions = this.transservice.getAllTransaction();
    this.transservice.getAllTransaction().subscribe((data:any)=>{
      console.log(data);
    })
  }

}
