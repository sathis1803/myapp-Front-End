import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'Bank Management System';
  token!:any;
 
  constructor(private router:Router,private cookies:CookieService){}
  ngOnInit(): void {
    const jwtToken = this.cookies.get('jwt_token');
    if(!jwtToken){
      this.router.navigate(['login']);
    }
    
  }

  onLogout(){
    
    this.cookies.delete('jwt_token');   
    this.router.navigate(['login']);
    //window.location.reload();
    // window.location.replace("http://localhost:4200");
    // window.location.reload();
  }

}
