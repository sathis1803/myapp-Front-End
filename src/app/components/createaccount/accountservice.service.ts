import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {
  branchId!: number;
  private baseUrl = 'http://localhost:8080/bank/account/accounts';
  
  constructor(private http: HttpClient) { }

  createAccount(account: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, account);
  }

  getAccountsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getBranchId(){
    return this.branchId;
  }
  setBranchId(branchId: number){
    this.branchId = branchId;
  }
}
