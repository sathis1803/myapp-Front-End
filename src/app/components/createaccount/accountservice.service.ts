import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {
  branchId!: number;
  accNo!: number;
  mobileNo!: string;
  
  private baseUrl = 'http://localhost:8080/bank/account/accounts';
  private updUrl = 'http://localhost:8080/bank/account';
  private userUrl =  'http://localhost:8080/bank/user';
  
  constructor(private http: HttpClient) { }

  createAccount(account: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, account);
  }

  getAccountById(accNo: number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${accNo}`);
  }

  getAccountsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  updateAccount(accNo: number,mobileNo: string): Observable<any>{
    return this.http.put(`${this.updUrl}/updatemobile/${accNo}/${mobileNo}`,accNo);
  }

  updateAccStatus(accNo: number,accStatus: boolean):Observable<any>{
    return this.http.put(`${this.updUrl}/updatestatus/${accNo}/${accStatus}`,accNo);
  }

  generateUser(user: Object):Observable<Object>{
    return this.http.post(`${this.userUrl}/create`, user, {responseType: 'text'});
  }

  deleteAccount(accNo: number){
    return this.http.delete(`${this.baseUrl}/${accNo}`);
  }

  getBranchId(){
    return this.branchId;
  }
  setBranchId(branchId: number){
    this.branchId = branchId;
  }

  getAccountNo(){
    return this.accNo;
  }
  setAccountNo(accNo: number){
    this.accNo = accNo;
  }

  getMobileNo(){
    return this.mobileNo;
  }
  setMobileNo(mobileNo: string){
    this.mobileNo = mobileNo;
  }
}
