import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatebranchComponent } from './components/createbranch/createbranch.component';
import { BranchdetailsComponent } from './components/branchdetails/branchdetails.component';
import { BranchlistComponent } from './components/branchlist/branchlist.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateaccountComponent } from './components/createaccount/createaccount.component';
import { AccountlistComponent } from './components/accountlist/accountlist.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { UpdateaccountComponent } from './components/updateaccount/updateaccount.component';
import { ViewaccountComponent } from './components/viewaccount/viewaccount.component';
import { TransactionlistComponent } from './components/transactionlist/transactionlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatebranchComponent,
    BranchdetailsComponent,
    BranchlistComponent,
    CreateaccountComponent,
    AccountlistComponent,
    TransactionComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    UpdateaccountComponent,
    ViewaccountComponent,
    TransactionlistComponent,
    DashboardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
