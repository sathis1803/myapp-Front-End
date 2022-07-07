import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl = 'http://localhost:8080/bank/account';
  private transUrl = 'http://localhost:8080/bank/transaction';

  constructor(private http: HttpClient) { }

  updateDeposit(accNo: number, amount: number ,value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/deposit/${accNo}/${amount}`, value);
  }

  updateWithdraw(accNo: number, amount: number ,value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/withdraw/${accNo}/${amount}`, value);
  }

  getAllTransaction(){
    return this.http.get(`${this.transUrl}/getallwithaccno`);
  }

}
