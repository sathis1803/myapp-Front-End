import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountlistComponent } from './components/accountlist/accountlist.component';
import { BranchdetailsComponent } from './components/branchdetails/branchdetails.component';
import { BranchlistComponent } from './components/branchlist/branchlist.component';
import { CreateaccountComponent } from './components/createaccount/createaccount.component';
import { CreatebranchComponent } from './components/createbranch/createbranch.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionlistComponent } from './components/transactionlist/transactionlist.component';
import { UpdateaccountComponent } from './components/updateaccount/updateaccount.component';
import { ViewaccountComponent } from './components/viewaccount/viewaccount.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component:HomeComponent,children:[
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'branches',component:BranchlistComponent},
    {path: 'dashboard',component:DashboardComponent},
    { path: 'add', component: CreatebranchComponent },
    { path: 'details/:id', component: BranchdetailsComponent },
    { path:'branch/addaccount/:accno',component: CreateaccountComponent},
    { path: 'branch/updateaccount/:accno',component: UpdateaccountComponent},
    { path:'branch/listaccount',component: AccountlistComponent},
    { path:'branch/account/transaction',component: TransactionComponent},
    { path: 'branch/account/view/:accno',component: ViewaccountComponent},
    { path: 'branch/account/transactionhistory',component:TransactionlistComponent}
  ]},
  { path: 'login',component:LoginComponent},
  { path: 'signup', component:SignupComponent},
  //{ path: 'home/branches', component: BranchlistComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
