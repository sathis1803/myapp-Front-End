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

@NgModule({
  declarations: [
    AppComponent,
    CreatebranchComponent,
    BranchdetailsComponent,
    BranchlistComponent,
    CreateaccountComponent,
    AccountlistComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
