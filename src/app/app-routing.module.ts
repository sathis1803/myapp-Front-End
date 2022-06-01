import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountlistComponent } from './components/accountlist/accountlist.component';
import { BranchdetailsComponent } from './components/branchdetails/branchdetails.component';
import { BranchlistComponent } from './components/branchlist/branchlist.component';
import { CreateaccountComponent } from './components/createaccount/createaccount.component';
import { CreatebranchComponent } from './components/createbranch/createbranch.component';

const routes: Routes = [
  { path: '', redirectTo: '/branches', pathMatch: 'full' },
  {path: 'branches', component: BranchlistComponent},
  { path: 'add', component: CreatebranchComponent },
  { path: 'details/:id', component: BranchdetailsComponent },
  {path:'branch/:id/addaccount',component: CreateaccountComponent},
  {path:'branch/listaccount',component: AccountlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
