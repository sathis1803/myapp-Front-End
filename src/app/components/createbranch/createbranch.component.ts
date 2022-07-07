import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Branch } from 'src/app/components/branch';
import { BranchserviceService } from './branchservice.service';


@Component({
  selector: 'app-createbranch',
  templateUrl: './createbranch.component.html',
  styleUrls: ['./createbranch.component.css']
})
export class CreatebranchComponent implements OnInit {

  branch: Branch = new Branch();
  onError:boolean = false;
  error:boolean = false;
  errorMessage:String = "";
  timer:any;
  constructor(private branchservice: BranchserviceService,
    private router: Router,private cookies:CookieService) { }

  ngOnInit(): void {  
    const jwtToken = this.cookies.get('jwt_token');
    if(!jwtToken){
      this.router.navigate(['login']);
    }
     
  }

  newBranch(): void {
    this.branch = new Branch();
  }

  toggleLoading(){
    this.error = !this.error;
  }

  setPostData(data:any){
    this.errorMessage = data;
    if(this.timer) {
        clearTimeout(this.timer);
    }
    this.error = false;
}

  onSubmit() {
    if(this.branch.branchCity != null && this.branch.branchName!=null){
      this.branchservice
      .createBranch(this.branch).subscribe((data: any) => {
        console.log(data)
        this.branch = new Branch();
        this.gotoList();
      },
        (error: any) =>{
           console.log(error.error.errorMessage);
           this.setPostData(error.error.errorMessage);
           this.timer = setTimeout(this.toggleLoading.bind(this), 2000);
           this.onError = true;
        });
    }else{
      this.errorMessage = "";
      this.onError = true;
    }
    
  }

  gotoList() {
    this.router.navigate(['home/branches']);
  }

}

