import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchserviceService {
  
  private baseUrl = 'http://localhost:8080/bank/branch/branches';
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
}
