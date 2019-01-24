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
    if (!this.authService.isLoggedIn)
    {
      this.authService.login()
    }
    else
    {
      this.router.navigate(['/choose-desk']);
    }
  }
  // click()
  // {
  //   this.authService.login();
  // }
}