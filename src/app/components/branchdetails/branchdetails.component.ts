import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Branch } from '../branch';
import { BranchserviceService } from '../createbranch/branchservice.service';

@Component({
  selector: 'app-branchdetails',
  templateUrl: './branchdetails.component.html',
  styleUrls: ['./branchdetails.component.css']
})
export class BranchdetailsComponent implements OnInit {

  branchId: number = 0;
  branch: Branch = new Branch;


  constructor(private route: ActivatedRoute, private router: Router,
    private branchservice: BranchserviceService) { }

  ngOnInit() {
    this.branch = new Branch();

    this.branchId = this.route.snapshot.params['id'];

    this.branchservice.getBranch(this.branchId)
      .subscribe(data => {
        console.log(data)
        this.branch = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['branches']);
  }
}
