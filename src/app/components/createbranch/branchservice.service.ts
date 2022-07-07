import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchserviceService {
  
  private baseUrl = 'http://localhost:8080/bank/branch/branches';
  private adminUrl = 'http://localhost:8080/bank';
  constructor(private http: HttpClient) { }

  getBranch(id: number): Observable<any> {
    console.log(this.http.get(`${this.baseUrl}/${id}`));
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createBranch(branch: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, branch);
  }

  updateBranch(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteBranch(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getBranchesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  checkBranchAdmin(username: string,password: string): Observable<any>{
    const params = new HttpParams().set('username',username).set('password',password);
    return this.http.get(`${this.adminUrl}/check`,{params});
  }

  createBranchAdmin(branchAdmin: Object): Observable<Object>{
    return this.http.post(`${this.adminUrl}/create`, branchAdmin);
  }

  changePassword(userName: string,password: string ,newpassword: string){
    return this.http.post(`${this.adminUrl}/change/${userName}/${password}/${newpassword}`,userName)
  }
  getBranchesCount(){
    return this.http.get(`${this.baseUrl}/count`);
  }
  getAccountsCount(){
    return this.http.get(`${this.adminUrl}/account/countAcc`);
  }
  getTransactionCount(){
    return this.http.get(`${this.adminUrl}/transaction/getCount`);
  }
}
