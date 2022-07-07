import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../account';
import { AccountserviceService } from '../createaccount/accountservice.service';

@Component({
  selector: 'app-updateaccount',
  templateUrl: './updateaccount.component.html',
  styleUrls: ['./updateaccount.component.css']
})
export class UpdateaccountComponent implements OnInit {

  account: Account = new Account();
  checkAccNo!:boolean;

  constructor(private accountservice: AccountserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.account.accNo = this.accountservice.accNo; 
    this.account.mobileNo = this.accountservice.mobileNo;
    const routeParams = this.route.snapshot.paramMap;
    const accNoFromRoute = Number(routeParams.get('accno'));  
    this.accountservice.getAccountById(accNoFromRoute).subscribe((data: any)=>{
    this.account.accNo = data.accNo;
    this.account.mobileNo = data.mobileNo;
   },
   (error: any)=>{
    if(error){
        this.router.navigate(['home/branch/listaccount']);
    }
   })
  
  }

  onUpdate(){
    this.accountservice.updateAccount(this.account.accNo,this.account.mobileNo).subscribe((data: any) => {
      console.log(data)
      this.account = new Account();
      if(data!=null){
        this.router.navigate(['home/branch/listaccount']);
      }
       
      
    },
      (error: any) =>{
        this.checkAccNo = true;
        console.log(error);
      });

    
  }

}
