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
    private authService: AuthService,
    private router: Router
    ) {}

  ngOnInit()
  {
    console.log("splash");
    console.log("Run login");
    if (!this.authService.isLoggedIn)
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
  // click()
  // {
  //   this.authService.login();
  // }
}