import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountserviceService } from '../createaccount/accountservice.service';

@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css']
})
export class AccountlistComponent implements OnInit {

  accounts: Observable<any> | undefined ;

  constructor(private accountservice: AccountserviceService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.accounts = this.accountservice.getAccountsList();
    console.log(this.accounts);
  }

}
