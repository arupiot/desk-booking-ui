import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-login',
  template: `<p>
                If you are not redirected soon, please refresh the page click this button
                </p>
                <button (click)=click()>click</button>`,
  styleUrls: ['./post-login.component.less']
})

export class PostLoginComponent implements OnInit {

  constructor(
    private authService: AuthService,//This is currently undefined. It should not be
    private router: Router
    ) { }
  

  ngOnInit() {
    console.log("back");

    

    // this.authService.isLoggedIn().subscribe();
    
    let checkLoggedIn = setInterval(() => {
      console.log("check");
      console.log(this.authService);
      
      if (this.authService.isLoggedIn)
      {
        // clearInterval(timer);
        this.router.navigate(['/choose-desk']);
      }
      else
      {
        console.log("not logged in");
      }
    },1000);
  }
  check()
  {
    console.log("checking");
    console.log(this.authService);
    
    if (this.authService.isLoggedIn)
    {
      // clearInterval(timer);
      this.router.navigate(['/choose-desk']);
    }
    else
    {
      console.log("not logged in");
    }
  }
  click()
  {
    console.log("clicked");
    this.router.navigate(['/choose-desk']);
  }
}
