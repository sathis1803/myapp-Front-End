import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bank Management System';
  token!:any;
  isTrue:boolean=false;
  constructor(private router:Router,private cookies:CookieService){}

  ngOnInit(): void {
    this.token = this.cookies.get('jwt_token');
    console.log(this.token);
    if(this.token!=null){
      this.isTrue = true; 
    }else{
      this.isTrue=false;
    }
  }
  
  onLogout(){
    
    this.cookies.delete('jwt_token');
    this.router.navigate(['login']);
    //window.location.reload();
  }
}
