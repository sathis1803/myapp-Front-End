import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Branch } from 'src/app/components/branch';
import { BranchserviceService } from './branchservice.service';


@Component({
  selector: 'app-createbranch',
  templateUrl: './createbranch.component.html',
  styleUrls: ['./createbranch.component.css']
})
export class CreatebranchComponent implements OnInit {

  branch: Branch = new Branch();
  submitted = false;
  
  constructor(private branchservice: BranchserviceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newBranch(): void {
    this.submitted = false;
    this.branch = new Branch();
  }

  save() {
    this.branchservice
      .createBranch(this.branch).subscribe((data: any) => {
        console.log(data)
        this.branch = new Branch();
        this.gotoList();
      },
        (error: any) => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/branches']);
  }

}
