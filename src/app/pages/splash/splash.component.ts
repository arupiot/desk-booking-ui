import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.less']
})
export class SplashComponent implements OnInit {

  constructor(
    private authService: AuthService,//This is currently undefined. It should not be
    private router: Router
    ) {}

  ngOnInit()
  {
    console.log("Run login");
    if (!this.authService.isLoggedIn)//In theory will redirect to home page if the user is logged in and will open login page if the user is not
    {
      console.log("not logged in");
      this.authService.login()
    }
    else
    {
      console.log("logged in");
      this.router.navigate(['/choose-desk']);
    }
  }
}